import axios from "axios"
import { parseCookies } from "nookies"

const baseAxios = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    Authorization: `Bearer ${parseCookies()["AccessToken"]}`
  }
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
      baseAxios.post("user/token", { body: { refreshToken: parseCookies()["RefreshToken"] } })
        .then((res) => {
          baseAxios.defaults.headers.common = {
            Authorization: `Bearer ${parseCookies()["AccessToken"]}`
          }
          originalConfig.headers["Authorization"] = `Bearer ${res}`
          baseAxios(originalConfig)
        })
    }
  }
)

export default baseAxios
