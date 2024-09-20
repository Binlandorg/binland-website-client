import Container from "ui/Container/Container"
import { Question } from "../../components/ServiceSeo/Question/Question"
import FinalProject from "./FinalProject/FinalProject"
import Hero from "./Hero/Hero"
import NavSeo from "./NavSeo/NavSeo"
import ServicesSeo from "./ServicesSeo/ServicesSeo"
import Technologies from "./Technologies/Technologies"

const ServiceSeo = () => {
	return (
		<div>
			<Hero />
			<Container size="xl">
				<ServicesSeo />
				<Question />
				<NavSeo />
			</Container>
			<FinalProject />
			<Technologies />
		</div>
	)
}

export default ServiceSeo
