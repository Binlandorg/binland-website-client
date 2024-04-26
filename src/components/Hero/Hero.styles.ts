import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const SectionHero = styled.section`
  width: 100%;
  padding-block: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding-block: 4rem 6rem;
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
    min-height: 30.875rem;
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns:
      minmax(var(--wrapper-padding-inline), 1fr)
      minmax(0, calc(var(--wrapper-max-width) / 2 - 4rem))
      minmax(0, calc(var(--wrapper-max-width) / 2 + 4rem));

    @media only screen and (min-width: ${breakpoints.lg}) {
      min-height: 36.875rem;
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

  .hero-content > img {
    display: none;

    @media only screen and (min-width: ${breakpoints.lg}) {
      grid-column: 2/ 3;
      margin-top: auto;
      margin-bottom: -15%;
      display: flex;
      position: relative;
      z-index: 1;
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
      padding: 3rem;
    }

    .small-message {
      color: ${colors.white.main};
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .hero-message {
      display: inline-block;
      font-weight: 600;
      font-size: clamp(2.5rem, 1.875rem + 2.778vw, 4.375rem);
      text-align: left;
      line-height: 3.75rem;
      color: ${colors.white.main};

      @media only screen and (min-width: ${breakpoints.xs}) {
        line-height: 4.25rem;
      }

      @media only screen and (min-width: 450px) {
        line-height: 5.625rem;
      }

      @media only screen and (min-width: ${breakpoints.lg}) {
        line-height: 6.5rem;
      }
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
`
