export interface IItems {
	id: string
	title: string
	ariaLabel: string
}

export interface ITableOfContent {
	className?: string
	items: IItems[]
	syncID?: string
	sectionsRef?: React.RefObject<HTMLElement[]>
}
