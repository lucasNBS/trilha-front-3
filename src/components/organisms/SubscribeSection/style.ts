import styled from "styled-components"

export const SubscribeSectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 550px) {
    padding: 0 2rem;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, 10vw, 3rem);
  font-family: ${({ theme }) => theme.fonts.secondary};
`
