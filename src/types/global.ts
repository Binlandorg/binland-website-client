import type { To } from "react-router-dom"

export type LanguageType = "en" | "es"

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
	video: string
	tags: TagType[]
	to: To
}

export type TestimonialType = {
	id: string
	client: {
		name: string
		image: string
		position: string
		company: string
	}
	testimonial: Record<LanguageType, string>
}
