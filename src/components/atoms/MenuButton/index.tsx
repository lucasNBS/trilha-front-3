import Image from "next/image"
import menu from "public/icons/menu.svg"
import { useState } from "react"
import { MenuButtonContainer } from "./style"
import { Background } from "src/components/organisms/Header/style"

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* <Background /> */}
      <MenuButtonContainer onClick={() => setIsOpen(true)}>
        <Image src={menu} width={60} height={60} alt="Ícone de abrir o menu" />
      </MenuButtonContainer>
    </>
  )
}
