import Logo from "src/components/atoms/Logo"
import Navbar from "src/components/molecules/Navbar"
import SubscribeButton from "src/components/atoms/SubscribeButton"
import MenuButton from "src/components/atoms/MenuButton"
import { HeaderContainer, HeaderSubcontainer, UserName } from "./style"
import { useContextSelector } from "use-context-selector"
import { UserContent } from "src/contexts/UserContext"

export default function Header() {
  const { user } = useContextSelector(UserContent, (ctx) => {
    return {
      user: ctx.user,
    }
  })

  return (
    <HeaderContainer>
      <HeaderSubcontainer gap={1.5}>
        <MenuButton user={user} />
        <Logo type="header" />
      </HeaderSubcontainer>
      <HeaderSubcontainer>
        <Navbar type="header" />
        {user.name ? (
          <UserName>Olá, {user.name}</UserName>
        ) : (
          <SubscribeButton />
        )}
      </HeaderSubcontainer>
    </HeaderContainer>
  )
}
