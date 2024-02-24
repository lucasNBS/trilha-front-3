import ArticleForm from "src/components/organisms/ArticleForm"
import DefaultTemplate from "src/templates/DefaultTemplate"
import jwt from "jsonwebtoken"
import { NextPageContext } from "next"
import { parseCookies, setCookie } from "nookies"
import tokenRefresh from "src/utils/token"

export default function Page() {
  return (
    <DefaultTemplate>
      <ArticleForm />
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

  const isValid: unknown = jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) {
        throw err
      }

      return user.id
    }
  )

  if (!isValid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
