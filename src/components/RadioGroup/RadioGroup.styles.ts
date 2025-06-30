import styled from "styled-components"

import { colors } from "styles/colors"

export const RadioWrapper = styled.label`
	display: flex;
	align-items: center;
`

export const RadioTarget = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;

	& input {
		opacity: 0;
		margin: 0;
	}

	& input:checked + .radio {
		&::after {
			opacity: 1;
			width: 0.5rem;
			height: 0.5rem;
		}
	}

	& .radio {
		position: absolute;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: ${colors.tertiary.normal[200]};

		&:after {
			content: "";
			position: absolute;
			width: 0rem;
			height: 0rem;
			border-radius: 50%;
			background-color: ${colors.primary.main};
			opacity: 0;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			transition: all 0.1s ease-in-out;
		}
	}
`

export const RadioLabel = styled.span`
	padding-left: 0.75rem;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
`
