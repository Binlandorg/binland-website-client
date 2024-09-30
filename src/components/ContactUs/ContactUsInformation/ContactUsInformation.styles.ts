import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

export const WrapperContactUsInformation = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: column;
	background-color: ${colors.black.main};
	border-radius: 0.5rem;
	padding: 1.5rem;
	width: 100%;
	height: min-content;

	@media only screen and (min-width: ${breakpoints.sm}) {
		padding: 2rem;
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		width: 40%;
		min-width: min-content;
		padding: 3rem;
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		border-radius: 1rem;
	}
`
