import { Prisma } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "src/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const users = await prisma.user.findMany()
      res.status(200).json({ users })
      break
    case "POST":
      const { body } = req.body
      const { name, email, password } = JSON.parse(body)

      const user = {
        name,
        email,
        password,
        isAdmin: false,
      }

      try {
        await prisma.user.create({ data: user })
        res.status(201).send("")
      } catch (err: any) {
        throw err
      }
      break
  }
}
