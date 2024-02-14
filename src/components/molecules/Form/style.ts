import styled from "styled-components"
import Image from "next/image"

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
`

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const FormLabel = styled.label`
  font-size: clamp(1rem, 5vw, 1.2rem);
  font-family: ${({ theme }) => theme.fonts.primary};
`

export const FormInputContainer = styled.div`
  width: 100%;
  position: relative;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2rem;
  border: 1px solid #666;
`

export const Icon = styled(Image)`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
`

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem 2rem;
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`
