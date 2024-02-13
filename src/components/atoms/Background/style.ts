import styled from "styled-components"

export const BackgroundContainer = styled.div<{ isOpen: boolean, onClick: () => void }>`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  z-index: 90;
  transform: ${({ isOpen }) => !isOpen && "scale(0)"};
`
