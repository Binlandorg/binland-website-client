import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const InputWrapper = styled.div`
  background-color: ${colors.gray[150]};
  padding: 1.5rem 1.75rem 1rem;
  border-radius: 0.375rem;
  width: 100%;
`

export const InputLabel = styled.label`
  display: grid;
  width: 100%;
  grid-template-areas: 'input';

  > * {
    grid-area: input;
  }

  span {
    transform-origin: left;
    transition: transform 0.3s, color 0.3s;
    display: inline-block;
    color: ${colors.black.main};
  }

  input {
    margin-top: 0.25rem;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font: inherit;
    background: none;
  }

  input:focus + span,
  input:not(:placeholder-shown) + span {
    color: ${colors.secondary.normal[300]};
    transform: translate(0, -50%) scale(0.8);
  }
`
