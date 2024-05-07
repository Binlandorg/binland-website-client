import { NavLink } from 'react-router-dom'
import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { colors } from 'styles/colors'
import { FontWeight } from 'styles/typography'

export const StyledListItem = styled.li`
  list-style-type: none;
`

export const StyledAnchor = styled(NavLink)`
  color: ${colors.primary.main};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${FontWeight['semibold']};
  display: flex;
  flex-direction: column;
  position: relative;

  /** we use this to style the current (active) selected navbar item */
  &[aria-current='page'] {
    color: ${colors.primary.active[700]};

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${colors.primary.active[700]};
      bottom: 0px;
      left: 0px;
    }
  }

  &.is-active {
    color: red;
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary.main};
    bottom: 0px;
    left: 0px;
  }

  &:focus::after {
    width: 0%;
  }

  &:focus {
    outline: 0.125rem solid ${colors.primary.main};
    border-radius: 1rem;
    color: ${colors.primary.main};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
  }
`
