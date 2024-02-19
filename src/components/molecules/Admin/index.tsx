import { UserContent } from "src/contexts/UserContext"
import { useContextSelector } from "use-context-selector"
import { AdminContainer, AdminContent, Title } from "./style"
import AdminCard from "src/components/atoms/AdminCard"

export default function Admin() {
  const { user } = useContextSelector(UserContent, (ctx) => {
    return {
      user: ctx.user
    }
  })

  return (
    <AdminContainer>
      <Title>Olá, {user.name}</Title>
      <AdminContent>
        <AdminCard />
        <AdminCard />
      </AdminContent>
    </AdminContainer>
  )
}