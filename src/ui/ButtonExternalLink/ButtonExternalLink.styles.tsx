import styled from "styled-components"

import { buttonStyles } from "styles/button"
import type { IStyledButton } from "types/ui/Button"

export const StyledButtonExternalLink = styled.a<IStyledButton>`
    ${buttonStyles}
`
