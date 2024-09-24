import { Helmet } from "react-helmet-async"

import useIntlMessages from "hooks/useIntlMessages"
import Container from "ui/Container/Container"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"

const PrivacyPolicy: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<Container size="sm">
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Information on the management of personal data."
				/>
				<meta
					name="description"
					lang="es"
					content="Información sobre la gestión de datos personales."
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("privacy.policy.title.tag")}</title>
			</Helmet>
			Privacy Policy
		</Container>
	)
}

export default PrivacyPolicy
