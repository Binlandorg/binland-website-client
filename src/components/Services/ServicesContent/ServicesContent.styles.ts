import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

export const ServiceContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.xl}) {
    flex-direction: row;
  }

  & .left-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @media only screen and (min-width: ${breakpoints.xl}) {
      flex: 1 1 25.5rem;
    }

    & .what-is {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    & .what-includes {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & .includes-wrapper {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        gap: 1rem;

        & > li {
          display: flex;
          gap: 0.5rem;
        }
      }
    }
  }

  & .right-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1.5rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      justify-content: space-between;
      align-items: flex-end;
    }

    @media only screen and (min-width: ${breakpoints.xl}) {
      flex: 1 1 13rem;
    }

    & .see-more__link {
      background-color: ${colors.primary.main};
      color: ${colors.white.main};
      text-decoration: none;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      align-self: flex-end;
      display: flex;
      gap: 1rem;
      align-items: center;

      &:hover {
        background-color: ${colors.primary.hover[400]};
      }

      &:active {
        background-color: ${colors.primary.active[600]};
      }

      & span {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5;
      }
    }

    & .service__img {
      object-fit: cover;
      max-width: 17.5rem;
      width: 100%;
      height: auto;
      display: none;

      @media only screen and (min-width: ${breakpoints.xl}) {
        margin-top: 3.75rem;
        margin-bottom: 3.75rem;
        display: block;
      }
    }
  }
`
