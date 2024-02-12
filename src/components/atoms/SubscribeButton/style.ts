import styled from "styled-components"

export const SubscribeButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`
