import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'
import { colors } from 'styles/colors'

export const WrapperService = styled(Section)`
  gap: 3rem;
  padding: 3rem 1.5rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 5rem, 5rem, 10rem;
    gap: 2rem;
  }
`
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.secondary.main};
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    gap: 0.6875rem;
  }

  .service-title-question {
    font-weight: 700;
    font-size: clamp(2rem, 1.375rem + 3.125vw, 3.375rem);
    line-height: 3rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 5.062rem;
    }
  }

  .service-title-response {
    text-align: center;
    font-weight: 400;
    font-size: clamp(1rem, 0.9432rem + 0.2841vw, 1.125rem);
    line-height: 1.5rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 1.687rem;
    }
  }
`
export const WrapperDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  color: ${colors.secondary.main};

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }

  .wrapper-description-info {
    width: 16.687rem;
    height: 24.312rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.gray[50]};
    border-radius: 1rem;
    padding: 2rem;
    gap: 2rem;
  }

  .wrapper-description-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .wrapper-title-icon {
    color: ${colors.primary.main};
  }

  .wrapper-title {
    font-weight: 600;
    line-height: 2.25rem;
    font-size: clamp(1.5rem, 1.2727rem + 1.136vw, 2rem);

    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 3rem;
    }
  }

  .content-description-info-p {
    font-weight: 400;
    font-size: clamp(0.875rem, 0.8182rem + 0.2841vw, 1rem);
    line-height: 1.312rem;
    text-align: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
      line-height: 1.5rem;
    }
  }
`
