import styled from "styled-components"

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

export const PaginationButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #fff;
  transition: 200ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fourthary};
  }

  @media screen and (max-width: 550px) {
    font-size: 0.875rem;
  }
`
