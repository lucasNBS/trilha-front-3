import styled from "styled-components"
import { TypeType } from "."

export const SubscribeButtonContainer = styled.button<{ type: TypeType }>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ type }) => (type === "main" ? "1rem 2rem" : "0.75rem 1.25rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ type }) => (type === "main" ? "1.2rem" : "1rem")};
  font-weight: 700;
  color: #fff;
`
