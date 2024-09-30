import { breakpoints } from "shared/breakpoints"
import styled from "styled-components"

import { colors } from "styles/colors"

export const SocialMediaWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 100%;
	gap: 0.75rem;

	.social-media-link {
		display: grid;
		place-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 100%;
		color: ${colors.white.main};
		background-color: ${colors.secondary.main};
		border: none;

		&:hover {
			background-color: ${colors.secondary.normal[400]};
		}

		&:active {
			background-color: ${colors.white.main};
			color: ${colors.black.main};
		}

		&:focus-visible {
			background-color: ${colors.white.main};
			color: ${colors.secondary.main};
			outline: 0.125rem solid ${colors.secondary.disabled[200]};
			outline-offset: 0.1875rem;
		}
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		justify-content: flex-start;
	}
`
