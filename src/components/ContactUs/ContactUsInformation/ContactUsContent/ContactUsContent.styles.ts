import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import { FontWeight } from "styles/typography"
import calendlyIcon from "../../../../assets/images/icons/calendly.svg"

export const ContentQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & p {
    color: ${colors.gray[150]};
  }

  @media only screen and (min-width: ${breakpoints.xxl}) {
    gap: 2rem;
  }
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
    width: max-content;
  }
`

export const ContentButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  justify-content: center;

  & > p {
    color: ${colors.gray[50]};
  }

  .popup-button-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 1rem 1.5rem;
    font-weight: ${FontWeight.semibold};
    color: ${colors.secondary.normal[800]};
    background-color: ${colors.tertiary.normal[50]};
    font-size: clamp(0.875rem, 0.832rem + 0.192vw, 1rem);
    border-radius: 0.5rem;
    line-height: 1;
    cursor: pointer;
    gap: 0.625rem;
    border: none;

    &:hover {
      background-color: ${colors.tertiary.hover[300]};
      color: ${colors.tertiary.hover[600]};
    }

    &:active {
      background-color: ${colors.tertiary.active[400]};
      color: ${colors.tertiary.active[700]};
    }

    &:focus-visible {
      outline: 0.125rem solid ${colors.tertiary.normal[50]};
      outline-offset: 0.125rem;
    }
  }

  .popup-button-custom::after {
    content: '';
    mask-image: url(${calendlyIcon});
    background-color: ${colors.secondary.normal[800]};
    width: 2rem;
    height: 2rem;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  .popup-button-custom:hover::after {
    background-color: ${colors.tertiary.hover[600]};
  }

  .popup-button-custom:active::after {
    background-color: ${colors.tertiary.active[700]};
  }

  @media only screen and (min-width: ${breakpoints.xxl}) {
    gap: 1rem;
  }
`
