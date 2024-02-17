import axios, { AxiosError } from "axios"
import { parseCookies } from "nookies"
import tokenRefresh from "src/utils/token"

type RequestItemType = {
  onSuccess: (token: string) => void
  onFailure: (err: AxiosError) => void
}

let isRefreshing = false
let failedRequestList: RequestItemType[] = []

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
  async (err) => {
    if (err.response.status === 401) {
      const originalConfig = err.config

      if (!isRefreshing) {
        isRefreshing = true

        try {
          const token = await tokenRefresh()

          baseAxios.defaults.headers.common = {
            Authorization: `Bearer ${parseCookies()["AccessToken"]}`,
          }
          originalConfig.headers["Authorization"] = `Bearer ${token}`
          baseAxios(originalConfig)

          failedRequestList.forEach((request: RequestItemType) => {
            request.onSuccess(token)
          })
          failedRequestList = []
        } catch (error) {
          failedRequestList.forEach((request: RequestItemType) => {
            request.onFailure(err)
          })
          failedRequestList = []
        }

        isRefreshing = false
      } else {
        return new Promise((resolve, reject) => {
          const requestItem: RequestItemType = {
            onSuccess: (token: string) => {
              originalConfig.headers["Authorization"] = `Bearer ${token}`
              resolve(baseAxios(originalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            },
          }

          failedRequestList.push(requestItem)
        })
      }
    }
  }
)

export default baseAxios
