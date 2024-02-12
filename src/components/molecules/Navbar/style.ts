import styled from "styled-components"
import { TypeType } from "."

export const NavbarContainer = styled.nav<{ type: TypeType }>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ type }) => type === "header" && "none"};
  }
`

export const NavbarList = styled.ul<{ type: TypeType }>`
  display: flex;
  flex-direction: ${({ type }) => type === "footer" && "column"};
  justify-content: center;
  align-items: ${({ type }) => (type === "footer" ? "flex-start" : "center")};
  gap: ${({ type }) => (type === "footer" ? "0.5rem" : "1.5rem")};
`

export const NavbarListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: #fff;
`
