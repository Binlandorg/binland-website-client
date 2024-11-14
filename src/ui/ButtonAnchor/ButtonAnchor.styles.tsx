import styled, { css } from "styled-components"

import { buttonStyles } from "styles/button"
import { colors } from "styles/colors"
import type { IStyledButton } from "types/ui/ButtonAnchor"

const variantStyles = (variant: string) => {
	switch (variant) {
		case "primary":
			return colors.primary
		case "secondary":
			return colors.secondary
		default:
			return colors.primary
	}
}

const typeStyles = (type: string, $variant: string) => {
	switch (type) {
		case "solid":
			return css`
                color: ${colors.white.main};
                background-color: ${variantStyles($variant).main};

                & path{
                    fill: ${colors.white.main}
                }

                &:hover {
                    background-color: ${variantStyles($variant).hover[400]};
                }

                &:active {
                    background-color: ${variantStyles($variant).active[600]};
                }
            `
		case "outline":
			return css`
                color: ${variantStyles($variant).main};
                border: 2px solid ${variantStyles($variant).main};
                background-color: transparent;

                & path{
                    fill: ${variantStyles($variant).main}
                }

                &:hover {
                    background-color: ${variantStyles($variant).hover[300]};
                }

                &:active {
                    background-color: ${variantStyles($variant).active[600]};
                    color: ${colors.white.main};

                    & path{
                        fill: ${colors.white.main}
                    }
                }
            `
		case "text":
			return css`
                border: none;
                color: ${variantStyles($variant).main};
                background-color: transparent;

                & path{
                    fill: ${variantStyles($variant).main}
                }
                
                &:hover {
                    background-color: ${variantStyles($variant).hover[300]};
                }

                &:active {
                    background-color: ${variantStyles($variant).active[400]};
                }
            `
	}
}

export const StyledButtonAnchor = styled.a<IStyledButton>`
    ${buttonStyles}
    ${({ $style = "solid", $variant = "primary" }) => typeStyles($style, $variant)}
    ${({ $isFullWidth }) => !$isFullWidth && "max-width: fit-content;"}

    text-decoration: none;
`
