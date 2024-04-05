import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import Section from 'ui/Section/Section'

export const StyledQuote = styled(Section)`
  background: ${colors.secondary.main};
  color: ${colors.white.main};
  margin: 1rem 0;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  font-style: italic;

  .left-quotation-mark {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    img {
      height: 1.25rem;
    }
  }

  .quote {
    padding: 0 1.75rem;
    text-align: center;
  }

  .right-quotation-mark {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img {
      height: 1.25rem;
    }
  }

  @media only screen and (min-width: ${breakpoints.sm}) {
    padding: 2rem 6.5rem;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 2.25rem;
    padding: 3rem 6.5rem;

    .left-quotation-mark {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      img {
        height: 2.5rem;
      }
    }

    .quote {
      padding: 0 3.75rem;
    }

    .right-quotation-mark {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      img {
        height: 2.5rem;
      }
    }
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 4rem 9.5rem;
  }
`
