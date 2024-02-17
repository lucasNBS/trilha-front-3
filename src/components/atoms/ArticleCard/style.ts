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
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  inset: 0;
  transition: 200ms ease-in;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`
