import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { buttonStyles } from "styles/button"
import type { IStyledButton } from "types/ui/Button"

export const CustomNavLink = styled(NavLink)<IStyledButton>`
  ${buttonStyles}
`
