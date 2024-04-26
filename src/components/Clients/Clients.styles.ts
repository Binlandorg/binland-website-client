import styled from 'styled-components'

import Container from 'ui/Container/Container'
import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const StyledClientsSection = styled.section`
  box-shadow: 0 0 1.25rem 0 rgba(30, 26, 26, 0.5);
  background-color: ${colors.white.main};
  width: 100%;
`

export const ClientsSectionWrapper = styled(Container)`
  padding: 4rem 1rem 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 7rem 2rem 6rem;
  }
`

export const ClientsSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
  }
`

export const TitleAndButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

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
    max-width: 18rem;
    align-items: normal;
  }
`

export const BrandingsWrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-evenly;
  gap: 2rem 3rem;
  flex-wrap: wrap;

  .branding-img {
    width: 6rem;
    height: auto;
    opacity: 0.5;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 4.5rem 10rem;
    align-content: center;
  }
`
