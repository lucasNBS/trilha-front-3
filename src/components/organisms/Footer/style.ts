import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 3rem 4rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    padding: 3rem 1.5rem 4rem;
  }
`

export const FooterSubcontainer = styled.div<{ align?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ align }) => (align === "center" ? "center" : "flex-start")};
  gap: 1rem;
  flex: 1;
`

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  color: #fff;
`
