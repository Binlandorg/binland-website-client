import { css } from "styled-components"
import type { IStyledButton } from "types/ui/Button"
import { colors } from "./colors"

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

export const sizeStyles = (size: string) => {
	switch (size) {
		case "sm":
			return css`
                padding: 0.75rem 1rem;
                line-height: 1;
            `
		case "md":
			return css`
                padding: 1rem 1.5rem;
            `
		default:
			break
	}
}

export const typeStyles = (type: string, $variant: string) => {
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

export const buttonStyles = css<IStyledButton>`
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
font-weight: 600;
font-size: clamp(0.875rem, 0.8333rem + 0.2083vw, 1rem);
border: none;
text-decoration: none;
cursor: pointer;
${({ $style = "solid", $variant = "primary" }) => typeStyles($style, $variant)}
${({ $isfullwidth }) => ($isfullwidth ? "width: 100%;" : "max-width: fit-content;")}
${({ $size = "md" }) => sizeStyles($size)}
`
