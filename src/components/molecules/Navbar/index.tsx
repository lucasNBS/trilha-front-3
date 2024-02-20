import Link from "next/link"
import { NavbarContainer, NavbarList, NavbarListItem } from "./style"
import { UserContent } from "src/contexts/UserContext"
import { useContextSelector } from "use-context-selector"

export type TypeType = "header" | "footer" | "aside"

type NavbarProps = {
  type: TypeType
}

export default function Navbar({ type }: NavbarProps) {
  const { user } = useContextSelector(UserContent, (ctx) => {
    return {
      user: ctx.user,
    }
  })

  const hasAdmin = user.isAdmin
  const isLoged = !!user.id

  return (
    <NavbarContainer hasAdmin={hasAdmin} isLoged={isLoged} type={type}>
      <NavbarList type={type}>
        {type !== "header" && (
          <NavbarListItem>
            <Link href="/" prefetch={false}>
              Home
            </Link>
          </NavbarListItem>
        )}
        {hasAdmin && (
          <NavbarListItem>
            <Link href="/admin" prefetch={false}>
              Admin
            </Link>
          </NavbarListItem>
        )}
        {isLoged && (
          <NavbarListItem>
            <Link href="/artigo/criar" prefetch={false}>
              Criar Artigo
            </Link>
          </NavbarListItem>
        )}
        <NavbarListItem>
          <Link href="/artigos" prefetch={false}>
            Artigos
          </Link>
        </NavbarListItem>
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
