import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"

export const VerticalTabsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: ${breakpoints.md}) {
		flex-direction: row;
	}
`

export const TabsWrapper = styled.ul`
	min-width: fit-content;
	display: none;

	@media only screen and (min-width: ${breakpoints.md}) {
		display: block;
	}
`

export const SelectService = styled.div`
	@media only screen and (min-width: ${breakpoints.md}) {
		display: none;
	}
`

export const SingleTab = styled.li`
	--border-radius-var: 1rem;
	list-style: none;
	color: ${colors.secondary.main};
	opacity: 50%;
	font-weight: 500;
	padding: 1rem 2rem;
	border-top-left-radius: var(--border-radius-var);
	border-bottom-left-radius: var(--border-radius-var);
	position: relative;
	cursor: pointer;

	&.selected {
		--square-size: 2rem;
		background: ${colors.gray[150]};
		opacity: 1;
		color: ${colors.black.main};

		&::before {
			content: "";
			position: absolute;
			width: var(--square-size);
			height: var(--square-size);
			bottom: calc(-1 * var(--square-size));
			right: 0;
			background-color: transparent;
			border-radius: var(--border-radius-var);
			box-shadow: 1rem -1rem 0 0 ${colors.gray[150]};
		}

		&::after {
			content: "";
			position: absolute;
			width: var(--square-size);
			height: var(--square-size);
			top: calc(-1 * var(--square-size));
			right: 0;
			background-color: transparent;
			border-radius: var(--border-radius-var);
			box-shadow: 1rem 1rem 0 0 ${colors.gray[150]};
		}

		&:is(:first-child)::after {
			display: none;
		}
	}
`

export const ContentWrapper = styled.div`
	--border-radius-var: 0.5rem;
	width: 100%;
	display: flex;
	height: auto;
	flex-direction: column;
	background: ${colors.gray[150]};
	border-radius: var(--border-radius-var);
	padding: 1rem;

	&:not(.top-left-rounded) {
		border-top-left-radius: var(--border-radius-var);
	}

	@media only screen and (min-width: ${breakpoints.md}) {
		border-top-left-radius: 0;
		--border-radius-var: 1rem;
	}
`

export const MobileSelectService = styled.div`
	padding: 0.625rem;
	background: ${colors.gray[150]};
	margin-bottom: 1.5rem;
	border-radius: 0.5rem;

	@media only screen and (min-width: ${breakpoints.md}) {
		display: none;
	}
`
