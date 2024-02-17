import axios, { AxiosError } from "axios"
import { parseCookies } from "nookies"

let isRefreshing = false
let failedRequestList: unknown[] = []

const baseAxios = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    Authorization: `Bearer ${parseCookies()["AccessToken"]}`,
  },
})

baseAxios.interceptors.request.use(async (req) => {
  req.headers.Authorization = `Bearer ${parseCookies()["AccessToken"]}`
  return req
})

baseAxios.interceptors.response.use(
  (response) => {
    return response
  },
  async function (err) {
    if (err.response.status === 401) {
      const originalConfig = err.config

      if (!isRefreshing) {
        isRefreshing = true

        baseAxios
          .post("user/token", {
            body: { refreshToken: parseCookies()["RefreshToken"] },
          })
          .then((res) => {
            baseAxios.defaults.headers.common = {
              Authorization: `Bearer ${parseCookies()["AccessToken"]}`,
            }
            originalConfig.headers["Authorization"] = `Bearer ${res}`
            baseAxios(originalConfig)

            failedRequestList.forEach((request: any) => {
              request.onSuccess(res)
            })
            failedRequestList = []
          })
          .catch(() => {
            failedRequestList.forEach((onFailure: any) => {
              onFailure(err)
            })
            failedRequestList = []
          })
          .finally(() => {
            isRefreshing = false
          })
      } else {
        return new Promise((resolve, reject) => {
          failedRequestList.push({
            onSuccess: (token: string) => {
              originalConfig.headers["Authorization"] = `Bearer ${token}`
              resolve(baseAxios(originalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            }
          })
        })
      }
    }
  }
)

export default baseAxios
