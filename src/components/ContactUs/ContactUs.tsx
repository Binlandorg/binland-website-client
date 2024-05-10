import ContactUsInformation from './ContactUsInformation/ContactUsInformation'
import FormContacUs from './FormContactUs/FormContactUs'
import { ContentWrapper } from './ContactUs.styles'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import Section from 'ui/Section/Section'
import Container from 'ui/Container/Container'

const ContactUs: React.FC = () => {
  return (
    <Section id="contact-us" size="lg" type="margin">
      <Container size="xl" isfullwidth>
        <SectionTitle size="lg" text="Contactanos" />
        <ContentWrapper>
          <ContactUsInformation />
          <FormContacUs />
        </ContentWrapper>
      </Container>
    </Section>
  )
}

export default ContactUs
