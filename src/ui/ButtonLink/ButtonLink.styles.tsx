import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { colors } from "styles/colors"

export interface IStyledButtonLink {
	$isfullwidth?: boolean
}

export const CustomNavLink = styled(NavLink)<IStyledButtonLink>`
  text-decoration: none;
  ${({ $isfullwidth }) => $isfullwidth && "width: 100%;"}

  &:focus button{
    outline: 0.125rem solid ${colors.secondary.normal[800]};
    border-radius: 0.6rem;
  }

  &:focus{
    outline: none;
  }

  &:active button{
    background-color: ${colors.secondary.active[900]};
		color: ${colors.white.main};
  }
`
