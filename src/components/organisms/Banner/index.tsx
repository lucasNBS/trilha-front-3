import SubscribeButton from "src/components/atoms/SubscribeButton"
import { BannerContainer, BannerSubcontainer, Subtitle, Title } from "./style"

export default function Banner() {
  return (
    <BannerContainer>
      <BannerSubcontainer>
        <Title>Conferência Nacional sobre Branqueamento de Corais</Title>
        <Subtitle>Ciência, Conservação e Sustentabilidade</Subtitle>
      </BannerSubcontainer>
      <SubscribeButton type="main" />
    </BannerContainer>
  )
}
