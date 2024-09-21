import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { colors } from "styles/colors"

export const CustonNavLink = styled(NavLink)`
  text-decoration: none;
  width: fit-content;

  &:focus {
    outline: none;
    outline: 0.125rem solid ${colors.primary.main};
    border-radius: 0.6rem;
  }
`
