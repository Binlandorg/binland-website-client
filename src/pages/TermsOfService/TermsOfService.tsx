import useIntlMessages from "hooks/useIntlMessages"
import Container from "ui/Container/Container"

const TermsOfService: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<Container size="sm">
			<h2>{intl("terms.of.services.title")}</h2>
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
