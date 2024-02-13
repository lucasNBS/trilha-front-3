import Image from "next/image"
import menu from "public/icons/menu.svg"
import { MenuButtonContainer } from "./style"
import { useContextSelector } from "use-context-selector"
import { AditionalContent } from "src/contexts/AditionalContentContext"

export default function MenuButton() {
  const { setIsOpen } = useContextSelector(AditionalContent, (ctx) => {
    return {
      setIsOpen: ctx.setIsOpen,
    }
  })

  return (
    <>
      <MenuButtonContainer onClick={() => setIsOpen(true)}>
        <Image src={menu} width={40} height={40} alt="Ícone de abrir o menu" />
      </MenuButtonContainer>
    </>
  )
}
