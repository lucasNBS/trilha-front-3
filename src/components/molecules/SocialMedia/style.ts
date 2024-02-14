import styled from "styled-components"

export const SocialMediaContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  list-style-type: none;
`

export const SocialMediaItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: #fff;
  transition: 200ms ease-in;

  &:hover {
    opacity: 0.7;
  }
`
