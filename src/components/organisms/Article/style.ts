import styled from "styled-components"

export const ArticleContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 4rem 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 4rem 2rem 0;
  }
`

export const ArticleSubcontainer = styled.div<{ flex: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  flex: ${({ flex }) => flex};
`

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;

  @media screen and (max-width: 1024px) {
    width: 70%;
    margin: 0 auto;
  }
`

export const AuthorData = styled.span`
  width: 100%;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
`

export const Text = styled.p`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`
