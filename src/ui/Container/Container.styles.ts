import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { IStyledContainer } from 'types/ui/Container'

const sizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return `
        max-width: 40rem;
      `
    case 'md':
      return `
          max-width: 48rem;
        `
    case 'lg':
      return `
        max-width: 64rem;
      `
    case 'xl':
      return `
        max-width: 80rem;
      `
    default:
      break
  }
}

export const StyledContainer = styled.div<IStyledContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  margin: auto;
  flex-direction: column;
  width: ${({ $isfullwidth }) => ($isfullwidth ? '100%' : '')};

  ${(props) => sizeStyles(props.size)}

  @media only screen and (min-width: ${breakpoints.lg}) {
    padding: 0 5rem;
  }
`
