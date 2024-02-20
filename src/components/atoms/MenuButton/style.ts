import styled from "styled-components"

export const MenuButtonContainer = styled.button<{
  hasAdmin: boolean
  isLoged: boolean
}>`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1101px) {
    display: ${({ hasAdmin, isLoged }) => hasAdmin && isLoged && "none"};
  }

  @media screen and (min-width: 1025px) {
    display: ${({ isLoged, hasAdmin }) => isLoged && !hasAdmin && "none"};
  }

  @media screen and (min-width: 901px) {
    display: ${({ hasAdmin, isLoged }) => !hasAdmin && !isLoged && "none"};
  }
`
