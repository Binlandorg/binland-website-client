import styled from "styled-components"

import { colors } from "styles/colors"
import { FontWeight } from "styles/typography"

export const BannerWrapper = styled.div`
	background: linear-gradient(180deg, #1d1628 0%, #0c0a10 100%);
	border-radius: 0.5rem;
	padding: 1rem;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 9.5rem;
	position: relative;
	cursor: auto;

	@media only screen and (min-width: 1024px) {
		height: 100%;
	}

	& .banner-text {
		all: unset;
		color: ${colors.white.main};
		width: fit-content;
		z-index: 1;
		pointer-events: none;

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

	& .cta {
		z-index: 1;
	}
`

export const BackGroundWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0;

	& .first-blob {
		filter: blur(100px);
		position: absolute;
		right: -20%;
		bottom: -10%;
	}

	& .second-blob {
		filter: blur(100px);
		position: absolute;
		bottom: -50%;
		left: 40%;
	}

	& .arcs {
		width: 100%;
		height: 100%;
		position: relative;
		left: -10%;
		top: 50%;

		@media only screen and (min-width: 1024px) {
			top: 0;
		}
	}

	& .first-arc {
		position: absolute;
		bottom: -40%;
		right: -10%;
		mix-blend-mode: overlay;
		filter: blur(40px);
	}

	& .second-arc {
		position: absolute;
		bottom: -40%;
		left: -55%;
		scale: 0.7;
		mix-blend-mode: overlay;
		filter: blur(40px);
	}

	& .third-arc {
		position: absolute;
		bottom: -40%;
		right: -50%;
		scale: 0.7;
		mix-blend-mode: overlay;
		filter: blur(40px);
	}

	& .front-arc {
		position: absolute;
		bottom: -40%;
		right: -10%;
		mix-blend-mode: overlay;
		filter: blur(40px);
	}

	& .border-overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		bottom: 3rem;
		left: 0;
		top: 0;
		filter: blur(20px);
		mix-blend-mode: overlay;

		& svg {
			width: 100%;
			height: 100%;
		}
	}
`
