import type { PropsWithChildren } from "react"

export interface IStyledButton {
	$variant?: "primary" | "secondary"
	$style?: "solid" | "outline" | "text"
	$isFullWidth?: boolean
}

export interface IButtonAnchor extends PropsWithChildren {
	className?: string
	href: string
}
