import styled from "styled-components";

export const AdminCardContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.div`
  background-color: red;
  width: 200px;
  aspect-ratio: 3 / 4;
`

export const Text = styled.span`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const Count = styled.span`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`