import type { PropsWithChildren } from "react"

export interface IParagraph extends PropsWithChildren {
	$weight?: "regular"
	$style?: "normal" | "italic"
	$fontsize?: 12 | 14 | 16
	className?: string
}
