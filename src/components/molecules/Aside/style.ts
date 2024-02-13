import styled from "styled-components"

export const AsideContainer = styled.aside<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100vh;
  padding: 4rem 1rem 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transform: ${({ isOpen }) => isOpen && "translate(300px)"};
  transition: 200ms ease-in;
  z-index: 100;

  .image {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`
