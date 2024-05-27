import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'
import { colors } from 'styles/colors'
import Button from 'ui/Button/Button'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .recaptcha-container {
    width: 100%;
  }

  .g-recaptcha {
    transform-origin: 0 0;
    scale: 0.625;

    @media only screen and (min-width: 360px) {
      scale: 0.85;
    }

    @media only screen and (min-width: 420px) {
      scale: 1;
    }
  }
`

export const Error = styled.span`
  font-size: 0.75rem;
  color: ${colors.red[500]};
  margin-bottom: 0.25rem;
`

export const TitleForm = styled.h2`
  text-align: center;
  margin: 1rem 0rem;
`

export const ContainerForm = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${colors.white.main};
  border-radius: 0.5rem;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.sm}) {
    padding: 2rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: 56%;
    padding: 3rem;
  }

  @media only screen and (min-width: ${breakpoints.xxl}) {
    border-radius: 1rem;
  }
`

export const ButtonForm = styled(Button)`
  height: 3rem;
  width: 100%;
  padding: 1rem 1.5rem;

  &:focus {
    outline: 0.125rem solid ${colors.primary.focus[500]};
    outline-offset: 0.125rem;
  }

  &:active {
    background-color: ${colors.primary.active[600]};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    width: fit-content;
  }
`
