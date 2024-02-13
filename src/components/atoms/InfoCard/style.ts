import styled from "styled-components"

export const InfoCardContainer = styled.article<{ isEven: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ isEven }) => isEven && "row-reverse"};
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .image {
    width: 100%;
    max-width: 500px;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const InfoCardSubcontainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`

export const Title = styled.h3`
  line-height: 32px;
  font-size: clamp(1.25rem, 10vw, 2rem);
  font-family: ${({ theme }) => theme.fonts.secondary};
`

export const Text = styled.p`
  font-size: clamp(1rem, 5vw, 1.2rem);
  font-family: ${({ theme }) => theme.fonts.primary};
`
