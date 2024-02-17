import styled from "styled-components"

export const PaginatedGridContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 4rem 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;

  @media screen and (max-width: 550px) {
    padding: 4rem 2rem 0;
    gap: 2rem;
  }
`

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
