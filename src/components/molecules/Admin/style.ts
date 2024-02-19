import styled from "styled-components"

export const AdminContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  @media screen and (max-width: 550px) {
    padding: 4rem 2rem 0;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
`

export const AdminContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media screen and (max-width: 550px) {
    gap: 1rem;
  }
`
