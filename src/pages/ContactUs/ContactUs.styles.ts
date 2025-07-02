import styled from "styled-components"

import Container from "ui/Container/Container"
import Section from "ui/Section/Section"
import backgroundContact from "./../../assets/images/mockups/mockup-ui-chat.webp"

export const ContactUsWrapper = styled.div`
	width: 100%;
`

export const ContactUsHero = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	& h1 {
		text-transform: uppercase;
		z-index: 1;
	}

	& section {
		background: linear-gradient(
				194deg,
				rgba(45, 45, 45, 0) 10%,
				rgba(0, 0, 0, 0.88) 70%
			),
			url(${backgroundContact});
		background-repeat: no-repeat;
		background-position: 0% 30%;
		background-size: cover;
		position: relative;

		&::after {
			content: "";
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(3px);
		}
	}
`

export const SectionTitleHero = styled(Section)`
	max-width: 100%;
`

export const HeroWrapper = styled(Container)`
	flex-direction: row;
	width: 100%;
	justify-content: flex-start;
`
