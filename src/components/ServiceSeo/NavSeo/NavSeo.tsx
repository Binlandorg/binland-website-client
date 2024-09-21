import { useState } from "react"
import { IoEllipse } from "react-icons/io5"

import Section from "ui/Section/Section"
import {
	ContainerProcess,
	ContainerUlTabs,
	TabsIcon,
	WrapperInfo,
	WrapperTabs,
	WrapperTitleProcess,
} from "./NavSeo.style"

interface TabInfo {
	id: number
	label: string
	info: string
}

const tabsData: TabInfo[] = [
	{
		id: 0,
		label: "Diseño de wireframes 1",
		info:
			"awdadawadwad van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron.",
	},
	{
		id: 1,
		label: "Diseño de wireframes 2",
		info:
			"Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron.",
	},
	{
		id: 2,
		label: "Diseño de wireframes 3",
		info:
			"Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron.",
	},
	{
		id: 3,
		label: "Diseño de wireframes 4",
		info:
			"Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya ceguera. Crespo tio muchas luz iba cabeza ton. Talentazo sebastian ofenderla ni tu brillaron.",
	},
]

const NavSeo: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0)

	const selection = (index: number) => {
		setActiveTab(index)
	}

	return (
		<Section size="lg" type="padding">
			<ContainerProcess size="xl">
				<WrapperTitleProcess>
					<p className="title-process">
						¿Cuál es nuestro <span className="red-word">proceso</span> de desarrollo?
					</p>
					<p className="description-process">
						Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad ya
						ceguera.
					</p>
				</WrapperTitleProcess>
				<WrapperTabs>
					<ContainerUlTabs>
						<TabsIcon
							className={activeTab === 0 ? "selected" : "desactive"}
							onClick={() => selection(0)}
						>
							<IoEllipse size={18} />
						</TabsIcon>
						<TabsIcon
							className={activeTab === 1 ? "selected" : "desactive"}
							onClick={() => selection(1)}
						>
							<IoEllipse size={18} />
						</TabsIcon>
						<TabsIcon
							className={activeTab === 2 ? "selected" : "desactive"}
							onClick={() => selection(2)}
						>
							<IoEllipse size={18} />
						</TabsIcon>
						<TabsIcon
							className={activeTab === 3 ? "selected" : "desactive"}
							onClick={() => selection(3)}
						>
							<IoEllipse size={18} />
						</TabsIcon>
					</ContainerUlTabs>
					<div className="tab-content">
						{tabsData.map((tab) => (
							<WrapperInfo
								key={tab.id}
								style={{ display: activeTab === tab.id ? "" : "none" }}
							>
								<p className="wrapper-info-title">{tab.label}</p>
								<p className="wrapper-info-description"> {tab.info}</p>
							</WrapperInfo>
						))}
					</div>
				</WrapperTabs>
			</ContainerProcess>
		</Section>
	)
}
export default NavSeo
