import styled from "styled-components"

import { colors } from "styles/colors"

export const SelectWrapper = styled.div`
	&:focus-visible {
		outline: none;

		& .select-container {
			outline: 2px solid ${colors.tertiary.focus[500]};
			border-radius: 0.375rem;
		}
	}
`

export const SelectContainer = styled.div<{
	$open: boolean
	$isError: boolean
}>`
	--color: ${({ $isError }) =>
		$isError ? colors.primary.normal[500] : colors.tertiary.focus[500]};

	position: relative;
	border-radius: 0.375rem;
	overflow: hidden;
	cursor: pointer;

	${({ $isError }) =>
		$isError ? `outline: 2px solid ${colors.primary.normal[500]};` : ""}

	&:focus-within,
    &:active {
		outline: 2px solid var(--color);
	}

	&.open {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		box-shadow:
			0 -2px 0 0 var(--color),
			-2px 0 0 0 var(--color),
			2px 0 0 0 var(--color);
	}
`

export const SelectLabel = styled.div`
	padding: 1.5rem 1.75rem 1rem;
	background-color: ${colors.tertiary.normal[50]};
	display: flex;
	align-items: center;

	& .icon {
		margin-left: 0.5rem;
		align-self: end;
	}
`

export const Input = styled.input`
	width: 1px;
	margin-top: 0.25rem;
	border: none;
	outline: none;
	background: transparent;
	padding-inline: 0px;
`

export const Value = styled.div`
	align-self: end;
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
`

export const Label = styled.div`
	position: absolute;
	left: 1.75rem;
	transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 60%;

	&.to-up {
		opacity: 0.5;
		transform: scale(0.8) translateY(-100%);
		transform-origin: left;
		transition: all 0.3s ease-in-out;
		max-width: 100%;
	}
`

export const Options = styled.div<{ $open: boolean; $isError: boolean }>`
	--color: ${({ $isError }) =>
		$isError ? colors.primary.normal[500] : colors.tertiary.focus[500]};

	width: 100%;
	background-color: ${colors.white.main};
	border-radius: 0.375rem;
	overflow-y: scroll;

	&.open {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		box-shadow:
			-2px 0 0 0 var(--color),
			2px 0 0 0 var(--color),
			0 2px 0 0 var(--color);
	}
`

export const Option = styled.div`
	cursor: pointer;
	padding: 1.5rem 1.75rem 1rem;

	&:hover {
		background-color: ${colors.tertiary.normal[200]};
	}

	&.selected {
		background-color: ${colors.tertiary.normal[200]};
		color: ${colors.black.main};
	}
`

export const ErrorMessage = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${colors.primary.normal[500]};
	font-size: 0.875rem;
	margin-top: 0.5rem;
`
