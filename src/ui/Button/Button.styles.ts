import styled from "styled-components"

import type { IStyledButton } from "types/ui/Button"
import { buttonStyles } from "styles/button"

export const StyledButton = styled.button<IStyledButton>`
	${buttonStyles}
`
