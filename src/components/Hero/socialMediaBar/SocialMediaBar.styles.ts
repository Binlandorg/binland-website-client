import { Link } from 'react-router-dom'
import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { colors } from 'styles/colors'

interface IProps {
  type: string
  direction: string
}

const typeDirection = (direction: string) => {
  switch (direction) {
    case 'row':
      return `
        flex-direction: row;
        padding: 0.75rem 1rem;
        justify-content: space-between;
        gap: 0.5rem;

        @media only screen and (max-width: ${breakpoints.xs}) {
          gap: 0;
        }
      `
    case 'column':
      return `
        flex-direction: column;
        padding: 1rem 0.75rem;
        gap: 0.75rem;
      `
    default:
      break
  }
}

const TypeStyles = (type: string) => {
  switch (type) {
    case 'primary':
      return `
        background-color: ${colors.secondary.main};
      `
    case 'secondary':
      return `
        background-color: ${colors.secondary.normal[300]};
      `
    default:
      break
  }
}

export const SocialMediaBarWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  border-radius: 0 1rem 1rem 0;
  margin-right: auto;
  ${(props) => typeDirection(props.direction)}
  ${(props) => TypeStyles(props.type)}
`

export const WrapperIcon = styled.div`
  display: grid;
  place-content: center;
`

export const LinkIcon = styled(Link)`
  height: 2.25rem;
  width: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white.main};
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary.hover[400]};
  }

  &:active {
    background-color: ${colors.white.main};
    color: ${colors.black.main};
  }

  &:focus-visible {
    background-color: ${colors.white.main};
    color: ${colors.black.main};
  }
`
