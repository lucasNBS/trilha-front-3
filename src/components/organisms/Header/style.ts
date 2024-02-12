import styled from "styled-components"

export const Background = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20;
`

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderSubcontainer = styled.div<{ gap?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => (gap ? `${gap}rem` : "3.5rem")};
`
