import ContactUsContent from "./ContactUsContent/ContactUsContent"
import { WrapperContactUsInformation } from "./ContactUsInformation.styles"

const ContactUsInformation: React.FC = () => {
	return (
		<WrapperContactUsInformation>
			<ContactUsContent />
		</WrapperContactUsInformation>
	)
}

export default ContactUsInformation
