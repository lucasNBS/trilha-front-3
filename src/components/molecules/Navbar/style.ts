import styled from "styled-components"
import { TypeType } from "."

export const NavbarContainer = styled.nav<{
  type: TypeType
  hasAdmin: boolean
  isLoged: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    display: ${({ type, hasAdmin }) => type === "header" && hasAdmin && "none"};
  }

  @media screen and (max-width: 1024px) {
    display: ${({ type, isLoged }) => type === "header" && isLoged && "none"};
  }

  @media screen and (max-width: 900px) {
    display: ${({ type }) => type === "header" && "none"};
  }
`

export const NavbarList = styled.ul<{ type: TypeType }>`
  display: flex;
  flex-direction: ${({ type }) =>
    (type === "footer" || type === "aside") && "column"};
  justify-content: center;
  align-items: ${({ type }) =>
    type === "footer" || type === "aside" ? "flex-start" : "center"};
  gap: ${({ type }) =>
    type === "footer" ? "0.5rem" : type === "aside" ? "1rem" : "1.5rem"};
`

export const NavbarListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: #fff;
  transition: 200ms ease-in;

  &:hover {
    opacity: 0.7;
  }
`
