import styled from 'styled-components'

import imgService from '../../../assets/images/imgService/img-service.svg'
import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'
import Container from 'ui/Container/Container'
import { colors } from 'styles/colors'

export const BackgroundService = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${imgService});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 529px;
  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 100%;
  }
`

export const WrapperHero = styled(Container)`
  @media only screen and (min-width: ${breakpoints.md}) {
    justify-content: flex-start;
    align-items: start;
    margin: 0;
  }
`

export const SectionHero = styled(Section)`
  @media only screen and (min-width: ${breakpoints.lg}) {
    justify-content: flex-start;
    align-items: start;
  }
`

export const ContentHero = styled.div`
  width: 19.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1.5rem;
  gap: 3rem;
  background: rgba(45, 45, 45, 0.5);
  backdrop-filter: blur(0.312rem);

  @media only screen and (min-width: ${breakpoints.sm}) {
    width: 35.437rem;
    max-width: 100%;
    padding: 3rem;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    width: 44.437rem;
    max-width: 100%;
  }

  .button-contact-us {
    width: 100%;
    height: 3.5rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      width: fit-content;
    }
  }

  .hero-sub-title {
    font-weight: 500;
    font-size: clamp(1.125rem, 0.9545rem + 0.8523vw, 1.5rem);
    line-height: 1.687rem;
    color: ${colors.gray[50]};
    text-transform: uppercase;
    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 2.25rem;
    }
  }

  .hero-description {
    font-weight: 400;
    font-size: clamp(0.875rem, 0.8152rem + 0.2841vw, 1rem);
    line-height: 1.312rem;
    color: ${colors.gray[50]};
    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 1.5rem;
    }
  }

  .button-link-contact-us {
    font-weight: 600;
    font-size: clamp(0.875rem, 0.8152rem + 0.2841vw, 1rem);
    line-height: 1.3125rem;
    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 1.5rem;
    }
  }
`

export const TitleHero = styled.h1`
  font-weight: 700;
  font-size: clamp(2rem, 0.6364rem + 6.8182vw, 5rem);
  line-height: 4.5rem;
  color: ${colors.primary.main};
  text-transform: uppercase;

  @media only screen and (min-width: ${breakpoints.lg}) {
    line-height: 7.5rem;
  }
`
