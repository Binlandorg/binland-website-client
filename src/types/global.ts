import type { To } from "react-router-dom"

export type TagType =
	| "e-commerce"
	| "web design"
	| "binland"
	| "platform"
	| "web"
	| "mobile"
	| "design"
	| "development"
	| "main"
	| "industry"
	| "service"

export type PortfolioType = {
	id: string
	name: string
	description: string
	image: string
	tags: TagType[]
	to: To
}
