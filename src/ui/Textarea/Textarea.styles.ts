import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { breakpoints } from 'shared/breakpoints'

export const TextareaWrapper = styled.div`
  background-color: ${colors.gray[150]};
  padding: 1.5rem 1rem;
  border-radius: 0.375rem;
  height: auto;
  min-height: 9.375rem;
  position: relative;

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 1.5rem 1.75rem;
  }
`

export const TextareaLabel = styled.label`
  display: grid;
  width: 100%;
  grid-template-areas: 'textarea';
  padding-top: 0.5rem;

  > * {
    grid-area: textarea;
  }

  span {
    transform-origin: left;
    transition: transform 0.3s, color 0.3s;
    display: inline-block;
    color: ${colors.black.main};
    padding-bottom: 0.25rem;
    position: absolute;
    top: 1.25rem;
    left: 1.75rem;
  }

  textarea {
    margin-top: 0.5rem;
    height: 155%;
    border: none;
    outline: none;
    font: inherit;
    background: none;
    resize: none;
    min-height: 3.75rem;
    overflow-y: hidden;
    width: 100%;
  }

  textarea:focus + span,
  textarea:not(:placeholder-shown) + span {
    color: ${colors.secondary.normal[300]};
    transform: translate(0, -40%) scale(0.8);
    padding-bottom: 0.25rem;
  }
`
