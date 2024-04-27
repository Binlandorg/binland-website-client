import ContactUsInformation from './ContactUsInformation/ContactUsInformation'
import FormContacUs from './FormContactUs/FormContactUs'
import {
  SectionContactUs,
  ContactUsWrapper,
  ContentWrapper,
} from './ContactUs.styles'
import SectionTitle from 'components/SectionTitle/SectionTitle'

interface IContactUsProps {
  id: string
}

const ContactUs: React.FC<IContactUsProps> = ({ id }) => {
  return (
    <SectionContactUs id={id} size="xl" type="padding">
      <ContactUsWrapper size="xl">
        <SectionTitle size="lg" text="Contactanos" />
        <ContentWrapper>
          <ContactUsInformation />
          <FormContacUs />
        </ContentWrapper>
      </ContactUsWrapper>
    </SectionContactUs>
  )
}

export default ContactUs
