import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import { setCookie } from "nookies"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const { body } = req.body
      const { refreshToken } = body

      if (!refreshToken) {
        return res.status(401).send("")
      }

      jwt.verify(
        refreshToken as string,
        process.env.REFRESH_TOKEN_SECRET as string,
        (err, user: any) => {
          if (err) {
            return res.status(403).send("")
          }

          const accessToken = jwt.sign(
            { id: user.id },
            process.env.ACCESS_TOKEN_SECRET as string,
            {
              expiresIn: "20s",
            }
          )

          setCookie({ res }, "AccessToken", accessToken, {
            maxAge: 20,
            path: "/",
          })
          return res.send(accessToken)
        }
      )
      break
  }
}
