import { Suspense, lazy } from "react"

import useIntlMessages from "hooks/useIntlMessages"
import Container from "ui/Container/Container"
import Section from "ui/Section/Section"
import H2 from "ui/Titles/H2"
import { ContentWrapper } from "./ContactUs.styles"

const Info = lazy(() => import("./ContactUsInformation/ContactUsInformation"))
const Form = lazy(() => import("./ContactUsForm/ContactUsForm"))

const ContactUs: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<Section id="contact-us" size="lg" type="margin">
			<Container size="xl" isfullwidth>
				<H2 withDot>{intl("contact.us.hero.title")}</H2>
				<ContentWrapper>
					<Suspense>
						<Info />
					</Suspense>
					<Suspense>
						<Form />
					</Suspense>
				</ContentWrapper>
			</Container>
		</Section>
	)
}

export default ContactUs
