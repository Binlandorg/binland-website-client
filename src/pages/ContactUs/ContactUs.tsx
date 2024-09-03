import { ContactUsHero, SectionTitleHero } from './ContactUs.styles'
import {
  ContentWrapper,
  SectionContactUs,
} from 'components/ContactUs/ContactUs.styles'
import ContactUsInformation from 'components/ContactUs/ContactUsInformation/ContactUsInformation'
import ContactUsForm from 'components/ContactUs/ContactUsForm/ContactUsForm'
import useIntlMessages from 'hooks/useIntlMessages'
import H1 from 'ui/Titles/H1'
import BodyContainer from 'ui/BodyContainer/BodyContainer'

const ContactUs: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <>
      <ContactUsHero>
        <SectionTitleHero type="padding" size="lg">
          <H1>{intl('contact.us.hero.title')}</H1>
        </SectionTitleHero>
      </ContactUsHero>
      <BodyContainer>
        <SectionContactUs size="lg" type="padding">
          <ContentWrapper>
            <ContactUsInformation />
            <ContactUsForm />
          </ContentWrapper>
        </SectionContactUs>
      </BodyContainer>
    </>
  )
}

export default ContactUs
