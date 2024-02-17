import { parseCookies } from "nookies"
import baseAxios from "src/lib/axios"

export default async function tokenRefresh() {
  try {
    const refreshToken = parseCookies()["RefreshToken"]
    const res = await baseAxios.post("user/token", { refreshToken })
    return res.data
  } catch (err) {
    throw err
  }
}
