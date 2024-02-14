import { SubscribeButtonContainer } from "./style"

export type TypeType = "main" | undefined

type SubscribeButtonProps = {
  type?: TypeType
}

export default function SubscribeButton({ type }: SubscribeButtonProps) {
  return (
    <SubscribeButtonContainer href="/#form" type={type}>
      Inscrever-se
    </SubscribeButtonContainer>
  )
}
