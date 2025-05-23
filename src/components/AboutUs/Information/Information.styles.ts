import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import setupImgURL from "assets/images/photos/screens-with-binland-website.webp"
import setupImgURLMobile from "assets/images/photos/mobile/screens-with-binland-website-mobile.webp"

export const StyledInformation = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;

	@media only screen and (min-width: ${breakpoints.md}) {
		gap: 3.125rem;
		flex-direction: row;
	}
`

export const InformationDescription = styled.div`
	width: 100%;

	& > div:first-child {
		margin-bottom: 1rem;
	}

	& h3 .dot {
		color: ${colors.primary.main};
	}

	& h3,
	& h4 {
		text-transform: uppercase;
	}

	& .description {
		& p:first-child {
			margin-bottom: 0.5rem;
		}
	}
`
/** TODO: When there are metrics. **/

// export const InformationDetails = styled.div`
// 	width: 100%;
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	grid-template-rows: repeat(3, 1fr);
// 	gap: 0.625rem;

// 	& > div {
// 		background-color: ${colors.white.main};
// 		padding: 1rem;
// 		border-radius: 0.5rem;
// 		width: 100%;
// 		height: 100%;

// 		& h5 {
// 			opacity: 0.5;
// 			margin: 0;
// 		}

// 		& h5::first-letter {
// 			text-transform: capitalize;
// 		}
// 	}

// 	& .detail-amount {
// 		color: ${colors.secondary.normal[800]};
// 	}

// 	& .detail-image {
// 		display: none;
// 		background-image: url(${girlImgURLMobile});
// 		background-size: cover;
// 		background-position-y: 65%;

// 		@media only screen and (min-width: ${breakpoints.lg}) {
// 			background-image: url(${girlImgURL});
// 		}
// 	}

// 	@media only screen and (min-width: ${breakpoints.xs}) {
// 		grid-template-columns: repeat(2, minmax(150px, 1fr));
// 		grid-template-rows: auto auto;

// 		& .detail-image {
// 			display: inherit;
// 			grid-column: 1/2;
// 			grid-row: 2/3;
// 		}
// 	}

// 	@media only screen and (min-width: ${breakpoints.xxl}) {
// 		gap: 2rem;

// 		& > div {
// 			padding: 2rem;
// 		}
// 	}
// `

export const InformationDetails = styled.div`
	width: 100%;
	height: 10rem;
	background-image: url(${setupImgURLMobile});
	border-radius: 0.5rem;
	background-size: cover;
	background-position-y: 10%;

	@media only screen and (min-width: ${breakpoints.md}) {
		height: initial;
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		background-image: url(${setupImgURL});
		background-position-y: 15%;
	}
`
