import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import { FontWeight } from "styles/typography"
import sloganBGImageURLMobile from "../../../assets/images/mockups/mobile/mockup-ui-chat.webp"
import sloganBGImageURL from "../../../assets/images/mockups/mockup-ui-chat.webp"

export const StyledQuote = styled.div`
	color: ${colors.white.main};
	padding: 1.5rem;
	border-radius: 1rem;
	font-style: italic;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;

	&::after {
		content: "";
		width: 110%;
		height: 110%;
		background-image: url(${sloganBGImageURLMobile});
		background-size: cover;
		background-position-y: 22%;
		position: absolute;
		z-index: -1;
		filter: blur(15px);

		@media only screen and (min-width: ${breakpoints.lg}) {
			background-image: url(${sloganBGImageURL});
		}
	}

	@media only screen and (min-width: ${breakpoints.md}) {
		padding: 5rem;
	}

	@media only screen and (min-width: ${breakpoints.xxl}) {
		padding: 5rem 12.5rem;
	}
`
export const QuoteWrapper = styled.div`
	--size-icon: 2rem;
	display: grid;
	grid-template-columns: var(--size-icon) auto var(--size-icon);
	grid-template-rows: var(--size-icon) auto var(--size-icon);
	width: 100%;
	max-width: 885px;

	& > * {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& > div:nth-child(2) {
		grid-column: 2/3;
		grid-row: 2/3;
		padding: 0.625rem;
	}

	& > div:nth-child(3) {
		grid-column: 3/4;
		grid-row: 3/4;
	}

	& .quote {
		font-weight: ${FontWeight.regular};
		text-align: center;
	}

	& .icon-open-quote,
	& .icon-close-quote {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		& svg {
			width: 100%;
			fill: ${colors.white.main};
		}
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		--size-icon: 4rem;
		grid-template-columns: var(--size-icon) auto var(--size-icon);
		grid-template-rows: var(--size-icon) auto var(--size-icon);
	}
`
