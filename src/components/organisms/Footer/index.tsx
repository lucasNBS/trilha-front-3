import Logo from "src/components/atoms/Logo"
import Navbar from "src/components/molecules/Navbar"
import { FooterContainer, FooterSubcontainer, SubTitle } from "./style"
import SocialMedia from "src/components/molecules/SocialMedia"

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSubcontainer align="center">
        <Logo type="footer" />
      </FooterSubcontainer>
      <FooterSubcontainer>
        <SubTitle>Links Úteis</SubTitle>
        <Navbar type="footer" />
      </FooterSubcontainer>
      <FooterSubcontainer>
        <SubTitle>Redes Sociais</SubTitle>
        <SocialMedia />
      </FooterSubcontainer>
    </FooterContainer>
  )
}
