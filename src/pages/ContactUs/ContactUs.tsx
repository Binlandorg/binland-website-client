import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

import { ContactUsHero, SectionTitleHero } from './ContactUs.styles'
import {
  ContentWrapper,
  SectionContactUs,
} from 'components/ContactUs/ContactUs.styles'
import useIntlMessages from 'hooks/useIntlMessages'
import H1 from 'ui/Titles/H1'
import imageLinkPreview from '../../assets/images/image-link-preview.webp'

const Info = lazy(
  () => import('components/ContactUs/ContactUsInformation/ContactUsInformation')
)
const Form = lazy(
  () => import('components/ContactUs/ContactUsForm/ContactUsForm')
)
import BodyContainer from 'ui/BodyContainer/BodyContainer'

const ContactUs: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <>
      <Helmet prioritizeSeoTags>
        <meta
          name="description"
          lang="en"
          content="Have a question or a project in mind? At Binland, we’re ready to help. Contact us to discuss your software development needs and explore how we can work together."
        />
        <meta
          name="description"
          lang="es"
          content="¿Tienes alguna pregunta o proyecto en mente? En Binland, estamos listos para ayudarte. Contáctanos para discutir tus necesidades de desarrollo de software y descubrir cómo podemos colaborar."
        />
        <meta property="og:image" content={imageLinkPreview} />
        <title>Binland - {intl('contact.us.tab.title')}</title>
      </Helmet>
      <ContactUsHero>
        <SectionTitleHero type="padding" size="lg">
          <H1>{intl('contact.us.hero.title')}</H1>
        </SectionTitleHero>
      </ContactUsHero>
      <BodyContainer>
        <SectionContactUs size="lg" type="padding">
          <ContentWrapper>
            <Suspense>
              <Info />
            </Suspense>
            <Suspense>
              <Form />
            </Suspense>
          </ContentWrapper>
        </SectionContactUs>
      </BodyContainer>
    </>
  )
}

export default ContactUs
