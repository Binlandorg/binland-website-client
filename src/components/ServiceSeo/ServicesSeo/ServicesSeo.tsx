import { RiLinksFill } from "react-icons/ri"

import {
	WrapperDescription,
	WrapperServiceSeo,
	WrapperTitle,
} from "./ServicesSeo.styles"

interface IServiceSeo {
	id: number
	name: string
	icon: React.ReactNode
	description?: string
}

const ICON_SIZE = 24

const serviceSeo: IServiceSeo[] = [
	{
		id: 1,
		name: "Backlinks",
		icon: <RiLinksFill size={ICON_SIZE} />,
		description:
			"Proximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. Tome rio tios asi tres rito luz tras ella. Tio contaduria felicisima han paz escondidos lechuguino.",
	},
	{
		id: 2,
		name: "Backlinks",
		icon: <RiLinksFill size={ICON_SIZE} />,
		description:
			"Proximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. Tome rio tios asi tres rito luz tras ella. Tio contaduria felicisima han paz escondidos lechuguino.",
	},
	{
		id: 3,
		name: "Backlinks",
		icon: <RiLinksFill size={ICON_SIZE} />,
		description:
			"Proximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. Tome rio tios asi tres rito luz tras ella. Tio contaduria felicisima han paz escondidos lechuguino.",
	},
	{
		id: 4,
		name: "Backlinks",
		icon: <RiLinksFill size={ICON_SIZE} />,
		description:
			"Proximo iba sublime uso alcalde acelero senoras corrian. Al apretaba ilegales la conyugal. Tome rio tios asi tres rito luz tras ella. Tio contaduria felicisima han paz escondidos lechuguino.",
	},
]

const ServicesSeo = () => {
	return (
		<WrapperServiceSeo size="lg" type="margin">
			<WrapperTitle>
				<h2 className="seo-title-question">¿Qué incluye?</h2>
				<p className="seo-title-response">
					Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya
					ceguera.
				</p>
			</WrapperTitle>
			<WrapperDescription>
				{serviceSeo.map((element) => (
					<div key={element.id} className="wrapper-description-info">
						<div className="wrapper-description-title">
							<span className="wrapper-title-icon">{element.icon}</span>
							<h3 className="wrapper-title">{element.name}</h3>
						</div>
						<p className="content-description-info-p">{element.description}</p>
					</div>
				))}
			</WrapperDescription>
		</WrapperServiceSeo>
	)
}

export default ServicesSeo
