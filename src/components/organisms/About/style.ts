import styled from "styled-components"

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    width: 100%;
    max-width: 500px;
    height: 700px;
    object-fit: cover;
    object-position: center;
  }
`

export const AboutSubcontainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Title = styled.h2`
  font-size: clamp(1.5rem, 10vw, 3rem);
  font-family: ${({ theme }) => theme.fonts.secondary};
`

export const Text = styled.p`
  font-size: clamp(1rem, 5vw, 1.2rem);
  font-family: ${({ theme }) => theme.fonts.primary};
`
