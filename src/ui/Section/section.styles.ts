import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'

interface IStyledSection {
  type: 'margin' | 'padding'
  size: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return `32px`
    case 'md':
      return `48px`
    case 'lg':
      return `96px`
    case 'xl':
      return `144px`
    default:
      break
  }
}

export const StyledSection = styled.section<IStyledSection>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.type === 'margin'
      ? `margin: calc(${sizeStyles(props.size)} / 2) auto`
      : `padding: calc(${sizeStyles(props.size)} / 2) 0`};

  @media only screen and (min-width: ${breakpoints.lg}) {
    ${(props) =>
      props.type === 'margin'
        ? `margin: ${sizeStyles(props.size)} auto`
        : `padding: ${sizeStyles(props.size)} 0`};
  }
`
