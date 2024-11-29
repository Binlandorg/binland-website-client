import missionImg from "assets/images/illustrations/mission.webp"
import missionMobileImg from "assets/images/illustrations/mobile/mission.webp"
import valuesMobileImg from "assets/images/illustrations/mobile/values.webp"
import visionMobileImg from "assets/images/illustrations/mobile/vision.webp"
import valuesImg from "assets/images/illustrations/values.webp"
import visionImg from "assets/images/illustrations/vision.webp"
import type { IWhatWeAre } from "types/ui/cards"

export const whatWeAreData: Array<IWhatWeAre> = [
	{
		id: "mision",
		title: "about.us.what.we.are.mission.title",
		description: "about.us.what.we.are.mission.description",
		img: {
			src: missionImg,
			srcMobile: missionMobileImg,
			alt: "about.us.what.we.are.mission.alt",
			width: 368,
			height: 221,
		},
	},
	{
		id: "vision",
		title: "about.us.what.we.are.vision.title",
		description: "about.us.what.we.are.vision.description",
		img: {
			src: visionImg,
			srcMobile: visionMobileImg,
			alt: "about.us.what.we.are.vision.alt",
			width: 368,
			height: 221,
		},
	},
	{
		id: "values",
		title: "about.us.what.we.are.values.title",
		description: "about.us.what.we.are.values.description",
		img: {
			src: valuesImg,
			srcMobile: valuesMobileImg,
			alt: "about.us.what.we.are.values.alt",
			width: 368,
			height: 221,
		},
	},
]
