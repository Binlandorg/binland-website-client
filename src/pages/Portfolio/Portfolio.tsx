import { lazy } from "react"
import { Helmet } from "react-helmet-async"

import useIntlMessages from "hooks/useIntlMessages"
import BodyContainer from "ui/BodyContainer/BodyContainer"

const Hero = lazy(() => import("components/Portfolio/Hero/Hero"))
const Projects = lazy(() => import("components/Portfolio/Projects/Projects"))

const Portfolio: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<meta name="description" lang="en" content="Our projects speak for us." />
				<meta
					name="description"
					lang="es"
					content="Nuestros proyectos hablar por nosotros."
				/>
				<title>{intl("portfolio.tag.head.title")}</title>
			</Helmet>
			<Hero />
			<Projects />
		</BodyContainer>
	)
}

export default Portfolio
