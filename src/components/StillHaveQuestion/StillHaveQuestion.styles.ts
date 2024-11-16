import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import { iconStyled } from "styles/icon"

export const ContainerHaveQuestion = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 2rem;
	border-radius: 1rem;
	margin: 1.875rem 0rem;

	@media only screen and (min-width: ${breakpoints.lg}) {
		padding: 2rem;
	}

	.faq-button-contact-us {
		& .icon-send {
			${iconStyled}
			& path {
				fill: transparent;
			}
		}
	}
`
export const HaveQuestion = styled.div`
	text-align: center;
	display: grid;
	gap: 0.5rem;
`

export const SupportChat = styled.p`
	font-size: clamp(0.875rem, 4vw, 1rem);
	line-height: 1.5rem;
	font-weight: 400;
	color: ${colors.black.main};
`
