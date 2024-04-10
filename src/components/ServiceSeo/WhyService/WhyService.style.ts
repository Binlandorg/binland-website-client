import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'
import { colors } from 'styles/colors'

export const WrapperQuestion = styled(Section)`
  flex-wrap: wrap;
  padding: 3rem 0;
  gap: 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row-reverse;
    width: 100%;
    gap: 5rem;
  }

  .img-service {
    width: 100%;
    border-radius: 1rem;

    @media only screen and (min-width: ${breakpoints.sm}) {
      width: 27.562rem;
      height: 27.562rem;
    }
  }
`

export const WrapperQuestionService = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 28.812rem;
    height: 27.562rem;
    gap: 3rem;
    justify-content: start;
    padding-top: 3rem;
  }
`

export const TitleQuestion = styled.h2`
  font-size: clamp(2rem, 1.375rem + 3.125vw, 3.375rem);
  color: ${colors.red[1000]};
  text-transform: uppercase;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    text-align: start;
  }
`
export const TitleResponse = styled.p`
  font-weight: 400;
  font-size: clamp(0.875rem, 0.8182rem + 0.2841vw, 1rem);
  line-height: 1.5;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    text-align: start;
  }
`
