import { parseCookies } from "nookies"
import baseAxios from "src/lib/axios"
import jwt from "jsonwebtoken"

export default async function tokenRefresh() {
  try {
    const refreshToken = parseCookies()["RefreshToken"]
    const res = await baseAxios.post("user/token", { refreshToken })
    return res.data
  } catch (err) {
    throw err
  }
}

export function isAuthenticated(req: any, res: any) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (token == "undefined" || !token) {
    return res.status(401).send("")
  }

  const isValid: unknown = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) {
        return res.status(403).send("")
      }

      return user.id
    }
  )

  return isValid
}
