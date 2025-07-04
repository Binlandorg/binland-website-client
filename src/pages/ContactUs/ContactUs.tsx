import { Suspense, lazy } from "react"
import { Helmet } from "react-helmet-async"

import {
	ContentWrapper,
	SectionContactUs,
} from "components/ContactUs/ContactUs.styles"
import useIntlMessages from "hooks/useIntlMessages"
import H1 from "ui/Titles/H1"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"
import { ContactUsHero, ContactUsWrapper } from "./ContactUs.styles"
import { SectionTitleHero } from "./ContactUs.styles"

const Info = lazy(
	() => import("components/ContactUs/ContactUsInformation/ContactUsInformation"),
)
const Form = lazy(
	() => import("components/ContactUs/ContactUsForm/ContactUsForm"),
)
import BodyContainer from "ui/BodyContainer/BodyContainer"

const ContactUs: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<ContactUsWrapper>
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Have a question or a project in mind?"
				/>
				<meta
					name="description"
					lang="es"
					content="¿Tienes alguna pregunta o proyecto en mente?"
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("contact.us.title.tag")}</title>
			</Helmet>
			<ContactUsHero>
				<SectionTitleHero type="padding" size="lg">
					<H1>{intl("contact.us.hero.title")}</H1>
				</SectionTitleHero>
			</ContactUsHero>
			<BodyContainer>
				<SectionContactUs size="lg" type="padding">
					<ContentWrapper>
						<Suspense>
							<Info />
						</Suspense>
						<Suspense>
							<Form />
						</Suspense>
					</ContentWrapper>
				</SectionContactUs>
			</BodyContainer>
		</ContactUsWrapper>
	)
}

export default ContactUs
