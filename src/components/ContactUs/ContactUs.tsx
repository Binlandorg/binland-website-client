import ContactUsInformation from './ContactUsInformation/ContactUsInformation'
import FormContacUs from './FormContactUs/FormContactUs'
import {
  SectionContactUs,
  ContactUsWrapper,
  ContentWrapper,
} from './ContactUs.styles'
import SectionTitle from 'components/SectionTitle/SectionTitle'

const ContactUs: React.FC = () => {
  return (
    <SectionContactUs id="home-contact-us" size="xl" type="padding">
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
