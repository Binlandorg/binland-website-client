import type { PropsWithChildren } from "react"
import type { WithClassName } from "types/components/shared"

export interface IStyledContainer {
	size: "sm" | "md" | "lg" | "xl"
	$isfullwidth?: boolean | undefined
}

export interface IContainer
	extends PropsWithChildren,
		WithClassName,
		IStyledContainer {
	id?: string
	isfullwidth?: boolean | undefined
}
