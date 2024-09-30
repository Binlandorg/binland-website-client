import { LazyLoadImage } from "react-lazy-load-image-component"
import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

interface ICardImgProps {
	width: number
	height: number
}

export const CardWrapper = styled.div`
	display: flex;
	padding: 2rem;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 1rem;
	background-color: ${colors.secondary[100]};
	max-width: 18.75rem;
	gap: 2rem;

	& .info {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		& h3 {
			text-align: center;
		}

		& .mision__description {
			text-align: center;
		}
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		flex: 1;
		max-height: fit-content;
	}
`

export const WhatWeAreImg = styled(LazyLoadImage)<ICardImgProps>`
	aspect-ratio: ${({ width, height }) => `${width} / ${height}`};
`
