import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const DescriptionAboutUs = styled.div`
  width: 100%;

  & > :first-child {
    font-weight: 500;
    font-size: clamp(1.125rem, 4vw, 1.875rem);
    line-height: 1.687rem;
    text-transform: uppercase;
    color: ${colors.primary.main};
  }

  & > :nth-child(2) {
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 2.6875rem);
    line-height: 3rem;
    text-transform: uppercase;
    color: ${colors.black.main};
    margin-bottom: 2.5rem;

    .description-point {
      color: ${colors.primary.main};
    }
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    max-width: 50%;
  }
`

export const ContentDescriptionAboutUs = styled.p`
  font-weight: 400;
  font-size: clamp(0.875rem, 4vw, 1rem);
  line-height: 1.312rem;
  text-align: justify;
  margin-bottom: 1.25rem;
  color: ${colors.black.main};
`
