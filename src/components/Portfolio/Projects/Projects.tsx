import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { To } from "react-router-dom"

import Banner from "components/Banner/Banner"
import { portfolios } from "data/portfolio"
import useIntlMessages from "hooks/useIntlMessages"
import type { TagType } from "types/global"
import ButtonText from "ui/ButtonText/ButtonText"
import Star from "ui/Icons/Star"
import SubTab from "ui/SubTab/SubTab"
import { FilterButton, Filters, ProjectsList } from "./Projects.styles"
import { ProjectItem, ProjectsWrapper } from "./Projects.styles"
import { SectionProjects } from "./Projects.styles"

const Projects: React.FC = () => {
	const [filter, setFilter] = useState<TagType>("main")
	const filtered = portfolios.filter((portfolio) =>
		portfolio.tags.includes(filter),
	)
	const intl = useIntlMessages()
	const navigate = useNavigate()

	const handleClick = (to: To) => navigate(to)

	const handleFilter = (tag: TagType) => {
		setFilter(tag)
	}

	return (
		<SectionProjects size="sm" type="margin">
			<ProjectsWrapper>
				<Filters>
					<FilterButton
						type="button"
						className={filter === "main" ? "active" : ""}
						onClick={() => handleFilter("main")}
					>
						<Star />
						<ButtonText $weight="semibold">
							{intl("portfolio.filter.button.main")}
						</ButtonText>
					</FilterButton>
				</Filters>
				<ProjectsList>
					{filtered.map((portfolio) => (
						<ProjectItem key={portfolio.id} onClick={() => handleClick(portfolio.to)}>
							<picture>
								<img src={portfolio.image} alt={portfolio.name} />
							</picture>
							<div className="text">
								<ButtonText className="name">{portfolio.name}</ButtonText>
								<SubTab className="description">{intl(portfolio.description)}</SubTab>
							</div>
						</ProjectItem>
					))}
					<ProjectItem className="banner">
						<Banner />
					</ProjectItem>
				</ProjectsList>
			</ProjectsWrapper>
		</SectionProjects>
	)
}

export default Projects
