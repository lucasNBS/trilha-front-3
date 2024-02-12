import Logo from "src/components/atoms/Logo"
import Navbar from "src/components/molecules/Navbar"
import SubscribeButton from "src/components/atoms/SubscribeButton"
import { HeaderContainer, HeaderSubcontainer } from "./style"
import MenuButton from "src/components/atoms/MenuButton"

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderSubcontainer gap={2}>
        <MenuButton />
        <Logo type="header" />
      </HeaderSubcontainer>
      <HeaderSubcontainer>
        <Navbar type="header" />
        <SubscribeButton />
      </HeaderSubcontainer>
    </HeaderContainer>
  )
}
