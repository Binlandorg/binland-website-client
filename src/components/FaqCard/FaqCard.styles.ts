import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  color: ${colors.black.main};
  background-color: ${colors.tertiary.normal[50]};
  font-size: clamp(0.8rem, 4vw, 1.125rem);
  line-height: 1.75rem;
  font-weight: 400;
  padding: 0.75rem 1.5rem;
  gap: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 1.5rem 3rem;
  }

  &:hover {
    background-color: ${colors.tertiary.normal[300]};
    color: ${colors.tertiary.hover[600]};
    cursor: pointer;
  }

  &.selected {
    background-color: ${colors.tertiary.normal[200]};
    color: ${colors.black.main};
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .faq-question {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .expand-collapse-toggle {
    display: grid;
    place-content: center;
  }
`

export const QuestionWrapper = styled.div`
  width: 100%;
`

export const AnswerFAQ = styled.div`
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 2rem;
  background-color: ${colors.tertiary.normal[50]};
  color: ${colors.black.main};

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 3rem;
  }
`

export const Response = styled.div`
  color: ${colors.black.main};
  font-size: clamp(0.8rem, 4vw, 1rem);
`
