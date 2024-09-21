import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"
import HeroImg from "./../../assets/images/mockups/mockup-ui-chat.webp"

export const SectionHero = styled(Section)`
  height: auto;
  background-color: ${colors.body};
  justify-content: flex-start;
  min-width: 100%;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    margin-bottom: 10rem;
  }
`

export const HeroBackground = styled.div`
  width: 100%;
  height: 38.125rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url(${HeroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-inline: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    height: 47.875rem;
    position: relative;
  }
`

export const HeroContentWrapper = styled.div`
  max-width: 50rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    position: absolute;
    top: 20%;
  }

  .hero-text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      gap: 2rem;
    }
  }

  .title-hero {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
    color: ${colors.white.main};

    @media only screen and (min-width: ${breakpoints.lg}) {
      font-size: 3rem;
      line-height: 4.5rem;
    }
  }

  .description-hero {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${colors.white.main};
    text-align: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
      font-size: 1.125rem;
      line-height: 1.6875rem;
    }
  }
`

export const IconsWrapper = styled.div`
  background-color: ${colors.secondary.hover[200]};
  max-width: 16.25rem;
  padding: 1.5rem;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  border-radius: 0.5rem;

  @media only screen and (min-width: ${breakpoints.sm}) {
    max-width: 25rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 3rem;
    padding: 1.5rem 3rem;
    max-width: fit-content;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.25);
  }

  .img-brand {
    height: auto;
    width: 3rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      width: 3.75rem;
    }
  }
`

export const OurWorkWrapper = styled.div`
  background-color: ${colors.white.main};
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    gap: 5rem;
    padding: 3.25rem 3rem;
    height: 25rem;
    position: absolute;
    top: 40rem;
    z-index: 2;
  }

  .our-works-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    max-width: 21.125rem;
  }

  .our-works-content > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .our-works-title {
    color: ${colors.black.main};
    text-transform: uppercase;
    font-weight: 600;
    font-size: clamp(2rem, 1.667rem + 1.481vw, 3rem);
    line-height: 3rem;
    text-align: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 4.5rem;
    }
  }

  .our-works-description {
    color: ${colors.black.main};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  .button-see-all {
    padding: 0.825rem 1.5rem;
    font-size: 1rem;
    line-height: 1.375rem;
    font-weight: 400;
  }

  .our-works-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${HeroImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 30.375rem;
    height: 10.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    @media only screen and (min-width: ${breakpoints.md}) {
      height: 18.625rem;
      padding: 1.5rem;
      border-radius: 1rem;
    }
  }

  .our-works-img :first-child {
    display: flex;
    justify-content: space-between;
  }

  .our-works-img :last-child {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${breakpoints.md}) {
      gap: 1rem;
    }
  }

  .our-works-client-name {
    font-weight: 700;
    line-height: 2.25rem;
    font-size: clamp(1rem, 0.833rem + 0.741vw, 1.5rem);
    color: ${colors.white.main};
  }

  .our-works-client-description {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: ${colors.white.main};
  }
`

export const SectionCards = styled(Section)`
  margin: auto;
`
