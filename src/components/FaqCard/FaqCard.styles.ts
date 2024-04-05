import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${colors.black.main};
  font-size: clamp(0.8rem, 4vw, 1.125rem);
  line-height: 1.75rem;
  font-weight: 400;
  padding: 0.75rem 1.5rem;
  gap: 1rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 1.5rem 3rem;
  }

  &:hover {
    background: gray;
    cursor: pointer;
  }
`

export const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: ${colors.gray[50]};

  .selected {
    background-color: #ede9f6;
    color: ${colors.black.main};
    font-weight: 700;
    font-size: clamp(0.8rem, 4vw, 1.125rem);
    line-height: 1.687rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const AnswerFAQ = styled.div`
  padding: 0.5rem;
  margin-top: 0.125rem;
  border-radius: 0.4375rem;
  padding: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 3rem;
  }
`

export const Response = styled.div`
  color: ${colors.black.main};
  font-size: clamp(0.8rem, 4vw, 1rem);
`
