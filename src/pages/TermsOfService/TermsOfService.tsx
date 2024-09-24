import { Helmet } from "react-helmet-async"

import useIntlMessages from "hooks/useIntlMessages"
import Container from "ui/Container/Container"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"

const TermsOfService: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<Container size="sm">
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Details on the use of our services."
				/>
				<meta
					name="description"
					lang="es"
					content="Detalles sobre el uso de nuestros servicios."
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("terms.of.service.title.tag")}</title>
			</Helmet>
			<h2>{intl("terms.of.service.title")}</h2>
			<div>
				<p>
					The following Terms and Conditions govern the use of each of the websites
					located at, or linked to, the URLs www.binland.dev and the services that
					might be offered in the site
				</p>
				<h3>Copyright and trademark Notice</h3>
				<p>ramdom text here</p>
				<p>ramdom text here</p>
				<h3>General Legal Notice and Liability Disclaimer</h3>
				<p>ramdom text here</p>
			</div>
		</Container>
	)
}

export default TermsOfService
