import styled from 'styled-components'
import { colors } from 'styles/colors'

import { breakpoints } from 'shared/breakpoints'

interface ISectionTitle {
  size: 'sm' | 'md' | 'lg' | 'xl'
}

const TitleSizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return `
        font-size: 2rem;
      `
    case 'md':
      return `
          font-size: 3rem;
        `
    case 'lg':
      return `
        font-size: 5rem;
      `
    case 'xl':
      return `
        font-size: 6rem;
      `
    default:
      break
  }
}

export const Title = styled.h1<ISectionTitle>`
  display: inline;
  font-style: normal;
  font-size: 3rem;
  font-weight: 700;
  line-height: 7.5rem;
  color: ${colors.black.main};

  @media only screen and (min-width: ${breakpoints.lg}) {
    ${(props) => TitleSizeStyles(props.size)}
  }

  .contact-us-point {
    color: ${colors.primary.main};
  }
`
