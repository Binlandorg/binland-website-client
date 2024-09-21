import { BsCheck } from "react-icons/bs"

import Container from "ui/Container/Container"
import {
	ContainerProjectFinal,
	ContentDescription,
	ContentTitle,
	ProyectDeliverables,
	QuestionWrapperSeo,
	SectionProjectDeliverables,
	WrapperProjectDeliverables,
} from "./FinalProject.style"

interface IFinalProyect {
	id: number
	name: string
}

const ServiceDelivered: IFinalProyect[] = [
	{ id: 1, name: "App web" },
	{ id: 2, name: "Codigo" },
	{ id: 3, name: "App web" },
	{ id: 4, name: "Base de datos" },
	{ id: 5, name: "Material Grafico" },
	{ id: 6, name: "Base de Datos" },
]

const FinalProject = () => {
	return (
		<ContainerProjectFinal>
			<Container size="xl">
				<SectionProjectDeliverables type="margin" size="sm">
					<QuestionWrapperSeo>
						<ContentTitle>
							¿Los <span className="red-letter">entregables</span> a final del
							proyecto?
						</ContentTitle>
						<ContentDescription>
							Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya
							ceguera.
						</ContentDescription>
					</QuestionWrapperSeo>
					<WrapperProjectDeliverables>
						{ServiceDelivered.map((element) => (
							<ProyectDeliverables key={element.id}>
								<BsCheck className="icon-check" size={20} strokeWidth="1px" />
								<p>{element.name} </p>
							</ProyectDeliverables>
						))}
					</WrapperProjectDeliverables>
				</SectionProjectDeliverables>
			</Container>
		</ContainerProjectFinal>
	)
}

export default FinalProject
