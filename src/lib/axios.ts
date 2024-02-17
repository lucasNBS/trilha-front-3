import axios from "axios"
import { parseCookies } from "nookies"
import tokenRefresh from "src/utils/token"

let isRefreshing = false

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
        } catch (error) {
          console.log(error)
        }

        isRefreshing = false
      }
    }
  }
)

export default baseAxios
