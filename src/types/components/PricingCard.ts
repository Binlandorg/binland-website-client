export interface IInclude {
	id: string
	text: string
}

export interface IPricingCard {
	title: string
	description: string
	currentPrice?: string
	previousPrice?: string
	includeTitle?: string
	include?: IInclude[]
	buttonTitle: string
	isHighlight: boolean
	buttonSendMessage: string
}

export interface IStyledPricingCardWrap {
	$isHighlight: boolean
}
