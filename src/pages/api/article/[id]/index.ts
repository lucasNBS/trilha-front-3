import { NextApiRequest, NextApiResponse } from "next"
import prisma from "src/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const { id } = req.query

      try {
        const article = await prisma.article.findUnique({
          where: { id: Number(id) },
          include: { author: true },
        })

        if (article) {
          return res.status(200).send(JSON.stringify(article))
        } else {
          return res.status(404).send("")
        }
      } catch (err) {
        throw err
      }
  }
}
