import styled from "styled-components"

export const AdminCardContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`

export const Text = styled.span`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const Count = styled.span`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`
