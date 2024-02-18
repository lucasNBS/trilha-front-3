import prisma from "src/lib/prisma"
import multer from "multer"
import fs from "fs"
import jwt from "jsonwebtoken"
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
