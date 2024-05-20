import { Helmet } from 'react-helmet-async'

import BodyContainer from 'ui/BodyContainer/BodyContainer'
import Hero from 'components/Hero/Hero'
import Services from 'components/Services/Services'
import Clients from 'components/Clients/Clients'
import ContactUs from 'components/ContactUs/ContactUs'
import imageLinkPreview from '../../assets/images/image-link-preview.png'

const Home = () => {
  return (
    <BodyContainer>
      <Helmet prioritizeSeoTags>
        <meta
          name="description"
          lang="en"
          content="Binland is a software development and design company, specializing in creating innovative digital solutions for businesses. Contact us for custom software, web design, and more."
        />
        <meta
          name="description"
          lang="es"
          content="Binland es una empresa de desarrollo de software y diseño, especializada en crear soluciones digitales innovadoras para empresas. Contáctanos para software personalizado, diseño web y más."
        />
        <meta property="og:image" content={imageLinkPreview} />
        <title>Binland</title>
      </Helmet>
      <Hero />
      <Services />
      <Clients />
      <ContactUs />
    </BodyContainer>
  )
}

export default Home
