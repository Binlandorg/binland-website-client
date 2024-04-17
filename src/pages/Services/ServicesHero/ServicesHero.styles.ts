import styled from 'styled-components'

import HeroImg from './../../../assets/images/ClientsPage//mockup-ui-chat.webp'
import { colors } from 'styles/colors'
import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'

export const SectionHero = styled(Section)`
  height: auto;
  min-width: 100%;
  margin: 0;
  padding: 0;

  .hero__title {
    color: ${colors.white.main};
    text-align: center;
    text-transform: uppercase;
    line-height: normal;

    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 7.5rem;
    }
    /* the font-size must be managed with the component*/
  }

  .hero__subtitle {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.6875;
    color: #f83d48; /* use the color palette primary 500*/
    text-align: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
  }

  .hero__description {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${colors.white.main};
    text-align: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
      font-size: 1.125rem;
      line-height: 1.6875;
    }
  }
`
export const HeroBackground = styled.div`
  width: 100%;
  height: 37.5rem;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 0)
    ),
    url(${HeroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-inline: 1rem;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 42rem;
    position: relative;
  }

  .hero__content__wrapper {
    display: flex;
    flex-direction: column;
    max-width: 56rem;
    padding: 2rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      gap: 2rem;
    }
  }

  .hero__content__wrapper > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`
