import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import calendlyIcon from '../../../../assets/images/imgContactUs/calendly-icon.svg'

export const ContentQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ContactUsQuestion = styled.p`
  color: ${colors.primary.main};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`

export const ContactUsResponse = styled.p`
  color: ${colors.gray[150]};
  font-weight: 400;
  font-size: 0.87rem;
  line-height: 1.31rem;
`

export const ContactUsInformationIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const IconContactUs = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  background-color: ${colors.secondary.normal[800]};
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 0.75rem;
  word-break: break-all;
  color: ${colors.gray[50]};
  gap: 1rem;

  @media only screen and (min-width: ${breakpoints.sm}) {
    align-items: center;
    width: fit-content;
  }
`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  margin: 0.875rem 0;

  .popup-button-custom {
    width: 8.187rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    color: ${colors.black.main};
    background-color: ${colors.gray[50]};
    font-size: 1rem;
    padding: 1rem, 1.5rem, 1rem, 1.5rem;
    border-radius: 0.5rem;
    line-height: 100%;
    cursor: pointer;
    gap: 0.625rem;

    &:hover {
      background-color: ${colors.secondary.hover[300]};
      outline: none;
    }
  }

  .popup-button-custom::after {
    content: url(${calendlyIcon});
    color: ${colors.secondary.main};
  }
`
export const QuestionButton = styled.p`
  color: ${colors.gray[50]};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
`
