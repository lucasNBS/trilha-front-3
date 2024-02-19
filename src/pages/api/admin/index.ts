import { NextApiRequest, NextApiResponse } from "next"
import prisma from "src/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const usersCount = await prisma.user.count()
        const articlesCount = await prisma.article.count()

        const dataToSend = {
          usersCount,
          articlesCount,
        }

        return res.status(200).send(JSON.stringify(dataToSend))
      } catch (err) {
        throw err
      }
  }
}
