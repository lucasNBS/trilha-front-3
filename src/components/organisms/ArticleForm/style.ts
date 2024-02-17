import styled from "styled-components"

export const ArticleFormContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 4rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 2rem;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    gap: 2rem;
  }
`

export const ArticleFormSubcontainer = styled.div<{ flex: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
  flex: ${({ flex }) => flex};
`

export const FormGroup = styled.div<{ type?: "content" }>`
  width: 100%;
  height: ${({ type }) => type === "content" && "100%"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  aspect-ratio: 3 / 4;

  @media screen and (max-width: 1024px) {
    max-width: 70%;
  }

  @media screen and (max-width: 550px) {
    max-width: none;
  }
`

export const FormLabel = styled.label`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #666;

  &.image {
    position: absolute;
    inset: 0;
    padding: 0;
    border: none;
  }
`

export const FormTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #666;
  resize: none;

  @media screen and (max-width: 1024px) {
    height: 400px;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #fff;
  transition: 200ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fourthary};
  }
`
