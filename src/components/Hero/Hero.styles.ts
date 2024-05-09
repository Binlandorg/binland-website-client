import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import Section from 'ui/Section/Section'

export const HeroSection = styled(Section)`
  height: calc(100vh - var(--header-height));
`

export const HeroContent = styled.div`
  position: relative;
  left: -0.75rem;
  width: calc(100vw - 1.5rem);
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  @media only screen and (min-width: ${ breakpoints.lg }) {
    width: calc(100vw - 5rem);
    left: -2.5rem;
  }

  @media only screen and (min-width: ${ breakpoints.full }) {
    position: static;
    width: 100%;
  }

  @media only screen and (min-width: ${ breakpoints["2k"] }) {
    width: 90rem;
    height: 51.625rem;
  }

  @media only screen and (min-width: ${ breakpoints["4k"] }) {
    width: 126.75rem;
    height: 78.5625rem;
  }
`

export const HeroContentWrapper = styled.div`
  background: linear-gradient(to top left, #720620 5%, #f83d48 60%);
  box-shadow: 0.625rem 0.5rem 0.625rem 0 rgba(0, 0, 0, 0.2);
  padding: 3.8rem 2rem 3.8rem 1.5rem;
  border-radius: 0rem 1rem 1rem 0rem;

  @media only screen and (min-width: ${ breakpoints.lg }) {
    display: flex;
    justify-content: space-between;
    padding-left: 0rem;
    padding: 5rem 5rem 5rem 0rem;
  }

  @media only screen and (min-width: ${ breakpoints.full }) {
    border-radius: 1rem;
  }

  @media only screen and (min-width: ${ breakpoints["2k"] }) {
    height: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;

  @media only screen and (min-width: ${ breakpoints.lg }) {
    max-width: 37rem;
  }

  @media only screen and (min-width: ${ breakpoints["2k"] }) {
    justify-content: center;
  }

  & a[href='#home-contact-us'] {
    display: flex;
    align-items: center;
    max-width: fit-content;
    background-color: ${colors.black.main};
    color: ${colors.white.main};
    border: none;
    outline: none;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    gap: 1rem;
    text-decoration: none;

    &:hover {
      background-color: ${colors.secondary.hover[900]};
    }

    &:active {
      background-color: ${colors.secondary.active[800]};
    }
  }
`

export const ContentText = styled.div`
  color: ${colors.white.main};

  & h4 {
    margin-bottom: 1rem;
    word-break: break-all;
  }

  & > span {
    word-break: break-all;
  }

  & span b {
    color: ${colors.black.main};
  }

  @media only screen and (min-width: ${ breakpoints.lg }) {
    & h4,
    & > span {
      word-break: normal;
    }
  }
`

export const NetworkWrapper = styled.div`
  & div[direction='row'] {
    display: flex;
    width: fit-content;
  }

  @media only screen and (min-width: ${ breakpoints.lg }) {
    display: none;
  }
`

export const NetworkWrapperInside = styled.div`
  display: none;
  align-items: center;

  @media only screen and (min-width: ${ breakpoints.lg }) {
    display: flex;
    z-index: 2;

    & div[direction='column'] {
      height: fit-content;
      background-color: ${colors.black.main};
    }
  }
`

export const ImageWrapper = styled.div`
  display: none;

  @media only screen and (min-width: ${ breakpoints.lg }) {
    --vhTablet: 44vh;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: var(--vhTablet); //600px
    height: var(--vhTablet); //600px
    bottom: 0;
    left: 0;
  }

  @media only screen and (min-width: ${ breakpoints.xxl }) {
    --vhLaptop: 68.4vh;
    justify-content: flex-start;
    width: var(--vhLaptop); //700px
    height: var(--vhLaptop); //700px
    left: -4%;
    right: inherit;

    & img {
      filter: drop-shadow(0.75rem 0 0.25rem rgba(0, 0, 0, 0.1));
    }
  }

  @media only screen and (min-width: ${ breakpoints.full }) {
    left: -5%;
  }

  @media only screen and (min-width: ${ breakpoints["2k"] }) {
    --vh2K: 66vh;
    width: var(--vh2K); //950px
    height: var(--vh2K); //950px
    left: -20%;
  }

  @media only screen and (min-width: ${ breakpoints["4k"] }) {
    --vh4K: 68.5vh;
    width: var(--vh4K); //1480px
    height: var(--vh4K); //1480px
    left: -39%;
  }
`
