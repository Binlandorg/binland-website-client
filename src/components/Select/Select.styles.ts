import styled from "styled-components"
import { colors } from "styles/colors"

export const SelectWrapper = styled.div<{
	$width: number | undefined
	$open: boolean
}>`
	position: relative;
	cursor: pointer;
`

export const Label = styled.div<{
	$width: number | undefined
	$open: boolean
	$isError: boolean
}>`
	--border-color: ${({ $isError }) =>
		$isError ? colors.primary.normal[500] : colors.tertiary.focus[500]};
	display: flex;
	padding: 1.5rem 1.75rem 1rem;
	border-radius: 0.375rem;
	margin-bottom: 0.5rem;
	height: min-content;
	background-color: ${colors.tertiary.normal[50]};
	${({ $width }) => ($width ? `max-width: ${$width}px;` : "")}
	${({ $width }) => ($width ? `width: ${$width}px;` : "")}
    ${({ $open }) => ($open ? `border-bottom-left-radius: 0;` : "")}
    ${({ $open }) => ($open ? `border-bottom-right-radius: 0;` : "")}
    ${({ $open }) =>
		$open
			? `box-shadow: 
            0 -2px 0 0 var(--border-color),
            -2px 0 0 0 var(--border-color),
            2px 0 0 0 var(--border-color);`
			: ""}

    ${({ $isError }) =>
		$isError ? `outline: 2px solid var(--border-color);` : ""}
    position: relative;

	& .content {
		position: relative;
		flex: 1;
		color: ${colors.secondary.normal[800]};
		text-align: left;
		margin-top: 0.25rem;
		align-content: flex-end;

		& .value {
			display: inline-block;
			width: 100%;
			align-self: self-end;
		}

		& .label {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			transition: all 0.1s ease-in-out;

			&.to-up {
				top: -55%;
				transition: all 0.1s ease-in-out;
				opacity: 0.5;
				transform: scale(0.8);
				transform-origin: left;
			}
		}
	}

	& .icon {
		transition: all 0.3s ease-in-out;
		flex-shrink: 0;
	}

	& .icon.to-up {
		transform: rotate(180deg);
	}

	& .icon.to-down {
		transform: rotate(0deg);
	}
`

export const Options = styled.div<{
	$width: number | undefined
	$open: boolean
	$isError: boolean
}>`
	--border-color: ${({ $isError }) =>
		$isError ? colors.primary.normal[500] : colors.tertiary.focus[500]};
	display: flex;
	flex-direction: column;
	background-color: ${colors.white.main};
	${({ $width }) => ($width ? `max-width: ${$width}px;` : "")}
	${({ $width }) => ($width ? `width: ${$width}px;` : "")}
    ${({ $open }) => ($open ? `overflow: hidden;` : "")}
    ${({ $open }) => ($open ? `border-bottom-left-radius: 0.375rem;` : "")}
    ${({ $open }) => ($open ? `border-bottom-right-radius: 0.375rem;` : "")}
    ${({ $open }) =>
		$open
			? `box-shadow: 
            -2px 0 0 0 var(--border-color),
            2px 0 0 0 var(--border-color),
            0 2px 0 0 var(--border-color);`
			: ""}
`

export const Option = styled.div`
	padding: 0.5rem;
	cursor: pointer;
	border: none;
	background-color: transparent;
	padding: 1.5rem 1.75rem 1rem;

	&:hover {
		background-color: ${colors.tertiary.normal[200]};
	}

	&.selected {
		background-color: ${colors.tertiary.normal[50]};
	}
`

export const ErrorMessage = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${colors.primary.normal[500]};
	font-size: 0.875rem;
`
