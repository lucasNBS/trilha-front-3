import { UserContent } from "src/contexts/UserContext"
import { useContextSelector } from "use-context-selector"
import { AdminContainer, AdminContent, Title } from "./style"
import AdminCard from "src/components/atoms/AdminCard"
import conference from "public/images/conference.jpg"
import articles from "public/images/articles.jpg"

type AdminProps = {
  usersCount: number
  articlesCount: number
}

export default function Admin({ usersCount, articlesCount }: AdminProps) {
  const { user } = useContextSelector(UserContent, (ctx) => {
    return {
      user: ctx.user,
    }
  })

  return (
    <AdminContainer>
      <Title>Olá, {user.name}</Title>
      <AdminContent>
        <AdminCard
          text="Usuários Inscritos"
          count={usersCount}
          image={conference.src}
        />
        <AdminCard
          text="Artigos Publicados"
          count={articlesCount}
          image={articles.src}
        />
      </AdminContent>
    </AdminContainer>
  )
}
