import Logo from "src/components/atoms/Logo"
import Navbar from "src/components/molecules/Navbar"
import SubscribeButton from "src/components/atoms/SubscribeButton"
import MenuButton from "src/components/atoms/MenuButton"
import { HeaderContainer, HeaderSubcontainer } from "./style"

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderSubcontainer gap={1.5}>
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
