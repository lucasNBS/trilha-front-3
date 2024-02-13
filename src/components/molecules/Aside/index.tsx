import Navbar from "src/components/molecules/Navbar"
import { AsideContainer } from "./style"
import Background from "src/components/atoms/Background"
import { useContextSelector } from "use-context-selector"
import { AditionalContent } from "src/contexts/AditionalContentContext"
import Image from "next/image"
import close from "public/icons/close.svg"

export default function Aside() {
  const { isOpen, setIsOpen } = useContextSelector(AditionalContent, (ctx) => {
    return {
      isOpen: ctx.isOpen,
      setIsOpen: ctx.setIsOpen,
    }
  })

  return (
    <>
      <Background isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <AsideContainer isOpen={isOpen}>
        <Image
          className="image"
          src={close}
          width={40}
          height={40}
          alt="Ícone de fechar o menu"
          onClick={() => setIsOpen(false)}
        />
        <Navbar type="aside" />
      </AsideContainer>
    </>
  )
}
