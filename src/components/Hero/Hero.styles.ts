import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const SectionHero = styled.section`
  width: 100%;
  padding-block: 2rem 4rem;
  display: flex;
  height: 96svh;
  height: 96vh;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding-top: 0;
    padding-bottom: 0;
  }

  --wrapper-max-width: 80rem;
  --wrapper-padding-inline: 1rem;

  .social-bar-horizontal {
    display: flex;

    @media only screen and (min-width: ${breakpoints.lg}) {
      display: none;
    }
  }

  .full-width-left-side {
    display: grid;
    grid-template-columns:
      minmax(var(--wrapper-padding-inline), 1fr)
      minmax(0, calc(var(--wrapper-max-width) / 2 - 1rem))
      minmax(0, calc(var(--wrapper-max-width) / 2 - 1rem))
      minmax(var(--wrapper-padding-inline), 1fr);
  }

  .hero-content {
    background: linear-gradient(to top left, #720620 5%, #f83d48 60%);
    box-shadow: 0.625rem 0.5rem 0.625rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0 1.25rem 1.25rem 0;
    min-height: 75vh;
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns:
      minmax(var(--wrapper-padding-inline), 1fr)
      minmax(0, calc(var(--wrapper-max-width) / 2 - 4rem))
      minmax(0, calc(var(--wrapper-max-width) / 2 + 4rem));

    @media only screen and (min-width: ${breakpoints.lg}) {
      min-height: 70vh;
    }
  }

  .hero-content > :first-child {
    display: none;

    @media only screen and (min-width: ${breakpoints.lg}) {
      grid-column: 1 / 2;
      display: grid;
      align-items: center;
      position: relative;
      z-index: 10;
    }
  }

  .img__hero {
    display: none;

    @media only screen and (min-width: ${breakpoints.lg}) {
      grid-column: 2/ 3;
      aspect-ratio: 1 / 1.1;
      object-fit: cover;
      margin: auto auto -20%;
      mask-image: linear-gradient(black 95%, transparent);
      display: block;
      width: calc(var(--wrapper-max-width) / 2.5);
      height: auto;
      filter: drop-shadow(0.75rem 0 0.25rem rgba(0, 0, 0, 0.1));
    }
  }

  .hero-content > :last-child {
    grid-column: 2 / 4;
    display: grid;
    justify-content: flex-start;
    align-content: center;
    gap: 2rem;
    padding-inline: 1rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      grid-column: 3/ 4;
      padding-inline: 3rem;
    }

    .hero-message {
      color: ${colors.white.main};
    }

    .small-message {
      color: ${colors.white.main};
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .span-black {
      color: ${colors.black.main};
      font-weight: 700;
    }
  }

  .button-contact-us {
    background-color: ${colors.black.main};
    color: ${colors.white.main};
    border: none;
    outline: none;
    padding: 1rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 1rem;
    height: auto;
    width: fit-content;
    display: flex;
    gap: 1rem;

    &:hover {
      background-color: ${colors.secondary.hover[900]};
    }

    &:active {
      background-color: ${colors.secondary.active[800]};
    }
  }

  .temporary-anchor {
    text-decoration: none;
  }
`

export const CustomMessageHero = styled.b`
  text-align: left;
  color: ${colors.black.main};
`
