import type { PropsWithChildren } from "react"

export interface IH1Props extends PropsWithChildren {
	color?: string
}

export interface IH2Props extends PropsWithChildren {
	color?: string
	withDot?: boolean
}

export interface IH3Props extends PropsWithChildren {
	color?: string
	$weight: "medium" | "semibold" | "bold"
}

export interface IH4Props extends PropsWithChildren {
	$weight: "regular" | "medium" | "bold"
	color?: string
}

export interface IH5Props extends IH4Props {}
