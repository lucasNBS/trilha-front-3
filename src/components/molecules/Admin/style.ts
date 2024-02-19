import styled from "styled-components";

export const AdminContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
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
`