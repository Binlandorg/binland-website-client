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
  font-weight: ${FontWeight["semibold"]};
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
    color: ${colors.primary.main};
    border-bottom: 2px solid  ${colors.primary.main};
  }

  
  &:focus {
    border: 0.125rem solid ${colors.primary.main};
    border-radius: 1rem;
    color: ${colors.primary.main};
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
  }
`
