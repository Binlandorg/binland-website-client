import styled from 'styled-components'

import Container from 'ui/Container/Container'
import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const StyledClientsSection = styled.section`
  box-shadow: 0 0 1.25rem 0 rgba(30, 26, 26, 0.5);
  background-color: ${colors.white.main};
  width: 100%;
  position: relative;
  width: calc(100vw - 18px);
`

export const ClientsSectionWrapper = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding-top: 7rem;
    padding-bottom: 6rem;
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
