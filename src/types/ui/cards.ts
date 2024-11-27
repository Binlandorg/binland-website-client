interface Iimg {
	src: string
	srcMobile: string
	alt: string
	width: number
	height: number
}

export interface IWhatWeAre {
	id: string
	title: string
	description: string
	img: Iimg
}
