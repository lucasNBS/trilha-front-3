import styled from "styled-components"

export const ArticleCardContainer = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  transition: 200ms ease-in;

  &:hover {
    transform: scale(1.03);
  }
`

export const ContentContainer = styled.div`
  background-color: #fff;
  position: absolute;
  inset: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  transition: 200ms ease-in;
  overflow: hidden;

  &:hover {
    opacity: 0.7;
  }
`

export const Title = styled.span`
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const Text = styled.span`
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`
