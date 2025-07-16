import type { IWhatWeAre } from "types/ui/cards"
import LightBulb from "ui/Icons/LightBulb"
import Target from "ui/Icons/Target"
import Values from "ui/Icons/Values"

export const whatWeAreData: Array<IWhatWeAre> = [
	{
		id: "mision",
		title: "about.us.what.we.are.mission.title",
		description: "about.us.what.we.are.mission.description",
		icon: <Target size={80} />,
	},
	{
		id: "vision",
		title: "about.us.what.we.are.vision.title",
		description: "about.us.what.we.are.vision.description",
		icon: <LightBulb size={80} />,
	},
	{
		id: "values",
		title: "about.us.what.we.are.values.title",
		description: "about.us.what.we.are.values.description",
		icon: <Values size={80} />,
	},
]
