import styled from "styled-components"

import { colors } from "styles/colors"
import { FontWeight } from "styles/typography"

export const BannerWrapper = styled.div`
	background: radial-gradient(
			33.25% 48.78% at 92.05% 92.99%,
			rgba(109, 77, 163, 0.2) 0%,
			rgba(0, 0, 0, 0) 100%
		),
		radial-gradient(
			41.82% 57.93% at 12.55% 11.82%,
			rgba(109, 77, 163, 0.2) 0%,
			rgba(48, 30, 77, 0) 100%
		),
		#2d2d2d;
	border-radius: 0.5rem;
	padding: 1rem;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 9.5rem;

	@media only screen and (min-width: 1024px) {
		height: 100%;
	}

	& .banner-text {
		all: unset;
		color: ${colors.white.main};
		width: fit-content;

		& .title {
			@media only screen and (min-width: 1024px) {
				font-size: 2rem;
				font-weight: ${FontWeight.medium};
				text-transform: uppercase;
			}
		}

		& .sub-title {
			@media only screen and (min-width: 1024px) {
				font-size: 1.5rem;
				font-weight: ${FontWeight.regular};
				margin-top: 1rem;
			}
		}
	}
`
