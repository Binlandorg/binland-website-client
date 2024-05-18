import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import Section from 'ui/Section/Section'

export const ClientsSection = styled(Section)`
  --padding-section-x: calc(1.5rem * 2);
  box-shadow: 0 0 1.25rem 0 rgba(30, 26, 26, 0.5);
  background-color: ${colors.white.main};
  width: calc(100% + var(--padding-section-x));
  max-width: inherit;
  padding: 1.5rem;
  position: relative;
  left: -1.5rem;

  @media only screen and (min-width: ${breakpoints.lg}){
    --padding-section-x: calc(5rem * 2);
    width: calc(100% + var(--padding-section-x));
    left: -5rem;
    padding: 5rem;
  }
`

export const ClientsSectionWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding-inline: 1rem;
  }
`

export const ClientsSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    gap: 5rem;
  }
`

export const TitleAndButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  & h2 {
    text-align: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
      text-align: left;
    }
  }

  .clients-title {
    font-weight: 600;
    font-size: clamp(2rem, 3.1vw, 3rem);
    line-height: normal;
    color: ${colors.secondary};
    text-align: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
      text-align: start;
    }
  }

  .span-point {
    color: ${colors.primary.main};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 3rem;
    max-width: 24.5rem;
    align-items: normal;
  }
`

export const BrandingsWrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem 3rem;
  flex-wrap: wrap;

  .container-img {
    width: 10rem;
    height: 10rem;
    display: grid;
    place-content: center;
  }

  .branding-img {
    width: 100%;
    height: auto;
    opacity: 0.5;
    filter: brightness(-50%);
  }

  :first-child {
    width: 16rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 4.5rem 10rem;
    width: 100%;
    justify-content: center;
  }
`
