import styled from "styled-components"

import type { IInputWrapper } from "types/ui/Input"
import { colors } from "../../styles/colors"

export const InputWrapper = styled.div<IInputWrapper>`
	background-color: ${colors.tertiary.normal[50]};
	padding: 1.5rem 1.75rem 1rem;
	border-radius: 0.375rem;
	width: 100%;
	margin-bottom: 0.5rem;

	&:focus-within,
	&:active {
		outline: 0.125rem solid ${colors.tertiary.focus[500]};
	}

	${(props) =>
		props.$isError &&
		`
    outline: 0.125rem solid ${colors.primary.normal[500]};
    &:focus-within,
    &:active {
      outline: 0.125rem solid ${colors.primary.normal[500]};
    }
  `}
`

export const InputLabel = styled.label`
	display: grid;
	width: 100%;
	grid-template-areas: "input";

	> * {
		grid-area: input;
	}

	span {
		transform-origin: left;
		transition:
			transform 0.3s,
			color 0.3s;
		display: inline-block;
		color: ${colors.secondary.normal[800]};
	}

	input {
		margin-top: 0.25rem;
		height: 100%;
		width: 100%;
		border: none;
		outline: none;
		font: inherit;
		background: none;
		color: ${colors.secondary.normal[800]};
	}

	input:focus + span,
	input:not(:placeholder-shown) + span {
		opacity: 0.5;
		transform: translate(0, -50%) scale(0.8);
	}
`

export const ErrorMessage = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.875rem;
	color: ${colors.primary.normal[500]};
`
