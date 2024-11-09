import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { colors } from "styles/colors"

export const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;

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
