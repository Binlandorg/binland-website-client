import type { PropsWithChildren } from "react"
import type { WithClassName } from "types/components/shared"

export interface IDisplayProps extends PropsWithChildren, WithClassName {
	fontStyle?: "normal" | "italic" | "oblique"
	size: "sm" | "md" | "lg"
}
