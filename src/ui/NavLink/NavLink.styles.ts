import { NavLink } from 'react-router-dom'
import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

import { colors } from 'styles/colors'

export const StyledListItem = styled.li`
  list-style-type: none;
`

export const StyledAnchor = styled(NavLink)`
  color: ${colors.primary.main};
  text-decoration: none;
  font-size: 0.875rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  /** we use this to style the current (active) selected navbar item */
  &[aria-current='page'] {
    color: ${colors.primary.active[700]};

    border-bottom: 2px solid ${colors.primary.active[700]};
  }

  &.is-active {
    color: red;
  }

  &:hover {
    color: ${colors.primary.active[600]};
    border-radius: 0.125rem;
  }

  &:active,
  &:focus {
    outline: 0.125rem solid ${colors.primary.focus[500]};
    border-radius: 0.375rem;
    color: ${colors.primary.focus[500]};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
  }
`
