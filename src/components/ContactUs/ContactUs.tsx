import ContactUsInformation from './ContactUsInformation/ContactUsInformation'
import FormContacUs from './FormContactUs/FormContactUs'
import { ContentWrapper } from './ContactUs.styles'
import Section from 'ui/Section/Section'
import Container from 'ui/Container/Container'
import H2 from 'ui/Titles/H2'
import useIntlMessages from 'hooks/useIntlMessages'

const ContactUs: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <Section id="contact-us" size="lg" type="margin">
      <Container size="xl" isfullwidth>
        <H2 withDot>{intl("contact.us.hero.title")}</H2>
        <ContentWrapper>
          <ContactUsInformation />
          <FormContacUs />
        </ContentWrapper>
      </Container>
    </Section>
  )
}

export default ContactUs
