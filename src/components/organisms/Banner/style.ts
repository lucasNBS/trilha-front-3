import styled from "styled-components"
import banner from "public/images/banner.webp"

export const BannerContainer = styled.section`
  background: no-repeat center/cover url(${banner.src});
  position: relative;
  width: 100%;
  height: 800px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  z-index: 1;

  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  @media screen and (max-width: 1400px) {
    height: 700px;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 1rem;
  }
`

export const BannerSubcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const Title = styled.h2`
  text-align: right;
  font-size: clamp(2rem, 10vw, 3rem);
  font-family: ${({ theme }) => theme.fonts.tertiary};
  color: #fff;
`

export const Subtitle = styled.p`
  text-align: right;
  font-size: clamp(1rem, 5vw, 2rem);
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #fff;
`
