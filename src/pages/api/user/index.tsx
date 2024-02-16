import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "src/lib/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { setCookie } from "nookies"

type UserType = {
  name: string
  email: string
}

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

    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn: "20s"
    })
    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET as string)

    setCookie({ res }, "AccessToken", accessToken, { maxAge: 20, path: "/" })
    setCookie({ res }, "RefreshToken", refreshToken, { path: "/" })

    return [true, { name: user.name, email: user.email }]
  } catch (err: any) {
    throw err
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      const { body } = req.body
      const { name, email, password } = JSON.parse(body)

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
        await prisma.user.create({ data: user })
        return res.status(201).send("")
      } catch (err: any) {
        throw err
      }
  }
}
