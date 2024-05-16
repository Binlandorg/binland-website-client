import { ContactUsHero, SectionTitleHero } from './ContactUs.styles'
import {
  ContactUsWrapper,
  ContentWrapper,
  SectionContactUs,
} from 'components/ContactUs/ContactUs.styles'
import ContactUsInformation from 'components/ContactUs/ContactUsInformation/ContactUsInformation'
import FormContacUs from 'components/ContactUs/FormContactUs/FormContactUs'
import useIntlMessages from 'hooks/useIntlMessages'
import H1 from 'ui/Titles/H1'

const ContactUs: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <>
      <ContactUsHero>
        <SectionTitleHero type="padding" size="lg">
          <H1>{intl("contact.us.hero.title")}</H1>
        </SectionTitleHero>
      </ContactUsHero>
      <SectionContactUs size="md" type="padding">
        <ContactUsWrapper size="xl">
          <ContentWrapper>
            <ContactUsInformation />
            <FormContacUs />
          </ContentWrapper>
        </ContactUsWrapper>
      </SectionContactUs>
    </>
  )
}

export default ContactUs
