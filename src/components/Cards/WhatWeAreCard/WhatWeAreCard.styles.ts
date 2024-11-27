import { LazyLoadImage } from "react-lazy-load-image-component"
import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

interface ICardImgProps {
	width: number
	height: number
}

export const CardWrapper = styled.div`
	--var-gap: 1rem;
	display: flex;
	padding: 1rem;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 0.5rem;
	background-color: ${colors.secondary[100]};
	width: 100%;
	gap: var(--var-gap);

	& .info {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 1rem;

		& h3 {
			text-align: center;
		}

		& .mision__description {
			text-align: center;
		}
	}

	@media only screen and (min-width: ${breakpoints.sm}) {
		max-width: calc((100% - var(--var-gap)) / 2);
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		flex: 1;
		max-width: 25rem;
		width: 100%;
	}
`

export const WhatWeAreImg = styled(LazyLoadImage)<ICardImgProps>`
	aspect-ratio: ${({ width, height }) => `${width} / ${height}`};
	width: 100%;
	height: 100%;
`
