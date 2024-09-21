import { LazyLoadImage } from "react-lazy-load-image-component"

import Container from "ui/Container/Container"
import figma from "../../../assets/images/icons/figma.svg"
import javascript from "../../../assets/images/icons/javascript.svg"
import nodejs from "../../../assets/images/icons/nodeJs.svg"
import python from "../../../assets/images/icons/python.svg"
import react from "../../../assets/images/icons/reactjs.svg"
import {
	SectionTechnologies,
	Tech,
	TechnologiesDescription,
	TechnologiesTitle,
	WrapperTechnologies,
	WrapperTechnologiesTitle,
} from "./Technologies.style"

interface ITechnologies {
	name: string
	image: string
}

const DevelopingTechnologies: ITechnologies[] = [
	{ name: "Javascript", image: javascript },
	{ name: "Figma", image: figma },
	{ name: "NodeJs", image: nodejs },
	{ name: "ReactJs", image: react },
	{ name: "Python", image: python },
]

const Technologies = () => {
	return (
		<SectionTechnologies type="margin" size="lg">
			<Container size="lg">
				<WrapperTechnologiesTitle>
					<TechnologiesTitle>
						<span className="text-red">Tecnologías</span> que manejamos
						<span className="text-red">.</span>
					</TechnologiesTitle>
					<TechnologiesDescription>
						Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya
						ceguera.
					</TechnologiesDescription>
				</WrapperTechnologiesTitle>
				<WrapperTechnologies>
					{DevelopingTechnologies.map((Element) => (
						<Tech key={Element.name}>
							<LazyLoadImage src={Element.image} alt="Technologies" />
						</Tech>
					))}
				</WrapperTechnologies>
			</Container>
		</SectionTechnologies>
	)
}

export default Technologies
