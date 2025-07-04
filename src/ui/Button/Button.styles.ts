import styled from "styled-components"

import type { IStyledButton } from "types/ui/Button"
import { buttonStyles } from "styles/button"
import { colors } from "styles/colors"

export const StyledButton = styled.button<IStyledButton>`
	${buttonStyles}
`

export const Loader = styled.span`
	width: 1rem;
	height: 1rem;
	border: 2px solid ${colors.white.main};
	border-bottom-color: transparent;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
