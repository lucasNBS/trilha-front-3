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
  top: -1px;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media screen and (max-width: 550px) {
    padding: 1rem 2rem;
  }
`

export const HeaderSubcontainer = styled.div<{ gap?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => (gap ? `${gap}rem` : "3.5rem")};
`

export const UserName = styled.span`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #fff;
`
