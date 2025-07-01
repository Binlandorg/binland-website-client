import styled from "styled-components"

import { colors } from "styles/colors"

export const Wrapper = styled.label`
	display: flex;
`

export const Target = styled.span`
	position: relative;
	display: flex;
	justify-content: center;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;

	& input {
		opacity: 0;
	}

	& .checkmark {
		position: absolute;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 0.125rem;
		box-shadow: inset 0 0 0 1px ${colors.secondary.normal[800]};
		margin-top: 0.25rem;
		display: flex;
		justify-content: center;
		transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		background-color: ${colors.white.main};

		&::after {
			content: "";
			position: absolute;
			width: 0.375rem;
			height: 0.625rem;
			border: 2px solid ${colors.white.main};
			border-top: 0;
			border-inline-start: 0;
			transform: rotate(45deg) scale(0) translate(-50%, -50%);
			opacity: 0;
			transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
			top: 50%;
			inset-inline-start: 25%;
		}
	}

	& input:checked + .checkmark {
		background-color: ${colors.primary.main};
		box-shadow: none;
		transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	& input:checked + .checkmark::after {
		transform: rotate(45deg) scale(1) translate(-50%, -50%);
		opacity: 1;
		transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
`

export const Label = styled.span`
	padding-inline: 0.5rem;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
`
