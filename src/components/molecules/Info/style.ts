import styled from "styled-components"

export const InfoContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.h2`
  font-size: clamp(2rem, 10vw, 4rem);
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #fff;
`

export const Text = styled.p`
  width: 60%;
  text-align: center;
  font-size: clamp(1rem, 5vw, 1.2rem);
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #fff;
`
