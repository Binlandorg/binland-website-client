import type { PropsWithChildren } from "react"
import type { WithClassName } from "types/components/shared"

export interface IStyledButton {
	$variant?: "primary" | "secondary"
	$size?: "sm" | "md"
	$style?: "solid" | "outline" | "text"
	$isfullwidth?: boolean | undefined
	$disabled?: boolean
}

export interface IButton
	extends PropsWithChildren,
		IStyledButton,
		WithClassName {
	onClick?: (() => void) | undefined
}
