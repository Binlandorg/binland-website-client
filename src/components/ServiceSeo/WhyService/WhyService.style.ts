import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import Section from 'ui/Section/Section'
import { colors } from 'styles/colors'

export const WrapperQuestion = styled(Section)`
  flex-wrap: wrap;
  padding: 3rem 1.5rem;
  gap: 3rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row-reverse;
    width: 100%;
    gap: 5rem;
  }

  .img-service {
    width: 19.5rem;
    height: 14.062rem;
    border-radius: 1rem;

    @media only screen and (min-width: ${breakpoints.lg}) {
      width: 27.562rem;
      height: 27.562rem;
    }
  }
`

export const WrapperQuestionService = styled.div`
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

export const TitleQuestion = styled.p`
  font-size: clamp(2rem, 1.375rem + 3.125vw, 3.375rem);
  line-height: 3rem;
  color: ${colors.secondary.main};
  text-align: center;

  .title-question-service {
    color: ${colors.red[1000]};
    text-transform: uppercase;
    font-weight: 700;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    line-height: 5.062rem;
    text-align: start;
  }
`
export const TitleResponse = styled.div`
  font-weight: 400;
  font-size: clamp(0.875rem, 0.8182rem + 0.2841vw, 1rem);
  line-height: 1.312rem;
  text-align: center;

  @media only screen and (min-width: ${breakpoints.lg}) {
    line-height: 1.5rem;
    text-align: start;
  }
`
