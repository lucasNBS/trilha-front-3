import { NextRequest, NextResponse } from "next/server"
import Admin from "src/components/molecules/Admin"
import baseAxios from "src/lib/axios"
import DefaultTemplate from "src/templates/DefaultTemplate"
import jwt from "jsonwebtoken"
import { NextPageContext } from "next"
import { parseCookies, setCookie } from "nookies"
import tokenRefresh from "src/utils/token"

type AdminData = {
  usersCount: number
  articlesCount: number
}

type PageProps = {
  adminData: AdminData
}

export default function Page({ adminData }: PageProps) {
  return (
    <DefaultTemplate>
      <Admin
        usersCount={adminData.usersCount}
        articlesCount={adminData.articlesCount}
      />
    </DefaultTemplate>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const refreshToken = parseCookies(ctx)["RefreshToken"]

  if (!refreshToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const accessToken = await tokenRefresh(ctx)

  setCookie(ctx, "AccessToken", accessToken, { maxAge: 20, path: "/" })

  const user: any = jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) {
        throw err
      }

      return user
    }
  )

  if (!user.id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  if (user.isAdmin) {
    try {
      const res = await baseAxios.get("admin")

      return {
        props: {
          adminData: res.data,
        },
      }
    } catch (err) {
      console.log(err)
    }
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  }
}
