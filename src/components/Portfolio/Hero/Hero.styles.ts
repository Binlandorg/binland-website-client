import styled from "styled-components"

import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const SectionHero = styled(Section)`
	margin: initial;
`

export const HeroWrapper = styled.div`
	position: relative;
	border-radius: 0.5rem;
	overflow: hidden;
	width: 100%;
	margin-top: 1.5rem;
	min-height: 8.25rem;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (min-width: 1024px) {
		min-height: 15.75rem;
		margin-top: 2.625rem;
	}

	& picture {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transform: scale(2);
			object-position: 0% 5%;

			@media only screen and (min-width: 1024px) {
				transform: scale(1);
				object-position: 0% 50%;
			}
		}
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 1) 26%,
			rgba(102, 102, 102, 0) 100%
		);
		z-index: 1;
	}
`

export const HeroContent = styled.div`
	z-index: 1;
	position: relative;
	padding: 1rem 1.5rem;
	text-align: center;

	@media only screen and (min-width: 1024px) {
		padding: 4rem 1.5rem;
	}

	& h5 {
		color: ${colors.primary.normal[500]};
	}
`
