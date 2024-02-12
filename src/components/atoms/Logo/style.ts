import styled from "styled-components"
import { TypeType } from "."

export const LogoContainer = styled.h1<{ type: TypeType }>`
  display: flex;
  flex-direction: ${({ type }) => type === "footer" && "column"};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .image {
    filter: brightness(0) invert(1);
  }
`

export const Title = styled.span<{ type: TypeType }>`
  font-size: clamp(1.5rem, 5vh, 2rem);
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-weight: 700;
  color: #fff;

  @media screen and (max-width: 1024px) {
    display: ${({ type }) => type === "header" && "none"};
  }
`
