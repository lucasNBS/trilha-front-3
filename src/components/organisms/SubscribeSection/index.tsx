import SubscribeForm from "src/components/organisms/SubscribeForm"
import { SubscribeSectionContainer, Title } from "./style"

export default function SubscribeSection() {
  return (
    <SubscribeSectionContainer id="form">
      <Title>Increva-se</Title>
      <SubscribeForm />
    </SubscribeSectionContainer>
  )
}
