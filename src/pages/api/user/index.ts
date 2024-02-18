import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "src/lib/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { setCookie } from "nookies"
import { UserType } from "src/types/user"

async function login(
  name: string,
  email: string,
  password: string,
  res: NextApiResponse
): Promise<[boolean, UserType | null]> {
  try {
    const user = await prisma.user.findUnique({ where: { email: email } })

    if (!user) {
      return [false, null]
    }

    const correctPassword = await bcrypt.compare(password, user.password)

    if (!correctPassword) {
      return [true, null]
    }

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: "20s",
      }
    )
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET as string
    )

    setCookie({ res }, "AccessToken", accessToken, { maxAge: 20, path: "/" })
    setCookie({ res }, "RefreshToken", refreshToken, { path: "/" })

    const { password: userPassword, ...data } = user
    const userData = data

    return [true, userData]
  } catch (err: any) {
    throw err
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const authHeader = req.headers["authorization"]
      const token = authHeader && authHeader.split(" ")[1]

      if (token == "undefined" || !token) {
        return res.status(401).send("")
      }

      jwt.verify(
        token as string,
        process.env.ACCESS_TOKEN_SECRET as string,
        async (err, user: any) => {
          if (err) {
            return res.status(403).send("")
          }

          if (user) {
            const userData = await prisma.user.findUnique({
              where: { id: user.id },
            })

            if (!userData) {
              return res.status(404).send("")
            }

            const { password, ...dataToSend } = userData

            return res.send(JSON.stringify(dataToSend))
          }
        }
      )

      break
    case "POST":
      const { name, email, password } = req.body

      const [isLogedIn, storedUser] = await login(name, email, password, res)

      if (isLogedIn) {
        return res.send(JSON.stringify(storedUser))
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = {
        name,
        email,
        password: hashedPassword,
        isAdmin: false,
      }

      try {
        const newUser = await prisma.user.create({ data: user })
        const { password: newUserPassword, ...userData } = newUser

        const accessToken = jwt.sign(
          { id: newUser.id },
          process.env.ACCESS_TOKEN_SECRET as string,
          {
            expiresIn: "20s",
          }
        )
        const refreshToken = jwt.sign(
          { id: newUser.id },
          process.env.REFRESH_TOKEN_SECRET as string
        )

        setCookie({ res }, "AccessToken", accessToken, {
          maxAge: 20,
          path: "/",
        })
        setCookie({ res }, "RefreshToken", refreshToken, { path: "/" })

        return res.status(201).send(JSON.stringify(userData))
      } catch (err: any) {
        throw err
      }
  }
}
