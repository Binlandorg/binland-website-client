export interface IIncludes {
	id: string
	text: string
}

export interface IServiceContent {
	id: string
	title: string
	description: string
	includes: IIncludes[]
	image: string
	link: string
	category: string
}

export type ServicesContentProps = {
	[key: string]: IServiceContent
}
