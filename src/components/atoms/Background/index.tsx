import { BackgroundContainer } from "./style"

type BackgroundProps = {
  isOpen: boolean
  onClick: () => void
}

export default function Background({ isOpen, onClick }: BackgroundProps) {
  return <BackgroundContainer isOpen={isOpen} onClick={onClick} />
}
