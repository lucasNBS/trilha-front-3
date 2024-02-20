import Image from "next/image"
import menu from "public/icons/menu.svg"
import { MenuButtonContainer } from "./style"
import { useContextSelector } from "use-context-selector"
import { AditionalContent } from "src/contexts/AditionalContentContext"
import { UserType } from "src/types/user"

type MenuButtonProps = {
  user: UserType
}

export default function MenuButton({ user }: MenuButtonProps) {
  const { setIsOpen } = useContextSelector(AditionalContent, (ctx) => {
    return {
      setIsOpen: ctx.setIsOpen,
    }
  })

  const hasAdmin = user.isAdmin
  const isLoged = !!user.id

  return (
    <>
      <MenuButtonContainer
        hasAdmin={hasAdmin}
        isLoged={isLoged}
        onClick={() => setIsOpen(true)}
      >
        <Image src={menu} width={40} height={40} alt="Ícone de abrir o menu" />
      </MenuButtonContainer>
    </>
  )
}
