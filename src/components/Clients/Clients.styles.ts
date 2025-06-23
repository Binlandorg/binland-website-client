import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"

export const ClientsSection = styled(Section)`
	--padding-section-x: calc(1.5rem * 2);
	box-shadow: 0 0 1.25rem 0 rgba(30, 26, 26, 0.5);
	background-color: ${colors.white.main};
	width: calc(100% + var(--padding-section-x));
	max-width: inherit;
	padding: 3.75rem 1.5rem ;
	position: relative;
	left: -1.5rem;

	@media only screen and (min-width: ${breakpoints.lg}) {
		--padding-section-x: calc(5rem * 2);
		width: calc(100% + var(--padding-section-x));
		left: -5rem;
		padding: 6.25rem 5rem ;
	}
`

export const ClientsSectionWrapper = styled.div`
	width: 100%;

	@media only screen and (min-width: ${breakpoints.lg}) {
		padding-inline: 1rem;
        padding-block: initial;
	}
`

export const ClientsSectionContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 3.75rem;

	@media only screen and (min-width: ${breakpoints.lg}) {
		gap: 7.5rem;
	}
`

export const TitleAndButtonSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	width: 100%;

	& h2 {
		text-align: center;
	}

	.clients-title {
		font-weight: 600;
		font-size: clamp(2rem, 3.1vw, 3rem);
		line-height: normal;
		color: ${colors.secondary};
		text-align: center;

		@media only screen and (min-width: ${breakpoints.lg}) {
			text-align: start;
		}
	}

	.span-point {
		color: ${colors.primary.main};
	}
`

export const TitleLine = styled.span`
    width: 10.25rem;
    height: 0.5rem;
    background-color: ${colors.primary.normal[500]};
`

export const BrandingsWrapper = styled.div`
    --gap: 2.5rem;

	display: flex;
	flex-wrap: wrap;
    gap: var(--gap);
    max-width: 66.5rem;
    width: 100%;
    align-self: center;

    @media only screen and (min-width: ${breakpoints.lg}) {
        gap: 6.25rem var(--gap);
    }

	.container-img {
        flex: 1 1 calc(50% - var(--gap));
        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (min-width: 488px) {
            flex: 1 1 calc(33% - var(--gap));
        }
	}

	.branding-img {
		width: 100%;
        height: 100%;
		max-height: 3.25rem;
        object-fit: contain;
		opacity: 0.5;
		filter: grayscale(100%);
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover{
            opacity: 1;
            filter: grayscale(0);
        }

        @media only screen and (min-width: ${breakpoints.lg}) {
            max-height: 3.75rem;
        }
	}
`
