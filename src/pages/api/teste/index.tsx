import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const authHeader = req.headers["authorization"]
      const token = authHeader && authHeader.split(" ")[1]

      if (token == "undefined" || !token) {
        return res.status(401).send("")
      }

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
        if (err) {
          return res.status(403).send("")
        }

        return res.send(JSON.stringify({ name: "ASD" }))
      })
  }
}