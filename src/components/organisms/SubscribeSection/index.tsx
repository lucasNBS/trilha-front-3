import Form from "src/components/molecules/Form"
import { SubscribeSectionContainer, Title } from "./style"
import baseAxios from "src/lib/axios"

async function handle() {
  await baseAxios.get("teste")
}

export default function SubscribeSection() {
  return (
    <SubscribeSectionContainer id="form">
      <Title>Increva-se</Title>
      <button onClick={handle}>UwU</button>
      <Form />
    </SubscribeSectionContainer>
  )
}
