import prisma from "src/lib/prisma"
import multer from "multer"
import fs from "fs"
import { isAuthenticated } from "src/utils/token"

export const config = {
  api: {
    bodyParser: false,
  },
}

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/upload",
  }),
})

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      const { page } = req.query
      const pageNumber = Number(page)

      try {
        const articlesPerPage = 20
        const articles = await prisma.article.findMany({
          take: articlesPerPage,
          skip: (pageNumber - 1) * articlesPerPage,
        })
        const totalArticles = await prisma.article.count()
        const totalAPIPages = Math.ceil(totalArticles / articlesPerPage)

        const next =
          pageNumber < totalAPIPages
            ? `http://localhost:3000/api/article?page=${pageNumber + 1}`
            : null
        const prev =
          pageNumber > 1
            ? `http://localhost:3000/api/article?page=${pageNumber - 1}`
            : null

        const data = {
          next: next,
          prev: prev,
          results: articles,
        }

        return res.status(200).send(JSON.stringify(data))
      } catch (err) {
        throw err
      }
      break
    case "POST":
      upload.single("cover")(req, res, async (err) => {
        if (err) {
          return res.status(500).send("")
        }

        const verify = isAuthenticated(req, res)

        if (verify == undefined) {
          return
        }

        const { title, content, user } = req.body
        const cover = req.file.originalname

        const imageURL = `http://localhost:3000/upload/${cover}`

        const tempPath = req.file.path
        const targetPath = `public/upload/${cover}`

        if (tempPath) {
          fs.rename(tempPath, targetPath, (err) => {
            if (err) {
              return res.status(500).send("")
            }
          })
        }

        if (JSON.parse(user).id == undefined) {
          return res.status(401).send("")
        }

        const article = {
          title,
          content,
          cover: imageURL,
          authorId: JSON.parse(user).id,
        }

        try {
          const newArticle = await prisma.article.create({ data: article })
          return res.status(201).send(JSON.stringify(newArticle))
        } catch (err: any) {
          throw err
        }
      })

      break
  }
}
