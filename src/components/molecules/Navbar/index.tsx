import Link from "next/link"
import { NavbarContainer, NavbarList, NavbarListItem } from "./style"

export type TypeType = "header" | "footer" | "aside"

type NavbarProps = {
  type: TypeType
}

export default function Navbar({ type }: NavbarProps) {
  return (
    <NavbarContainer type={type}>
      <NavbarList type={type}>
        {type !== "header" && (
          <NavbarListItem>
            <Link href="/" prefetch={false}>
              Home
            </Link>
          </NavbarListItem>
        )}
        <NavbarListItem>
          <Link href="/" prefetch={false}>
            Contato
          </Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link href="/" prefetch={false}>
            Sobre
          </Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link href="/" prefetch={false}>
            Patrocinadores
          </Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link href="/" prefetch={false}>
            FAQ
          </Link>
        </NavbarListItem>
      </NavbarList>
    </NavbarContainer>
  )
}
