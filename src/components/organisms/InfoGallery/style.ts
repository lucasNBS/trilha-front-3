import styled from "styled-components"

export const InfoGalleryContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 550px) {
    padding: 0 2rem;
  }
`
