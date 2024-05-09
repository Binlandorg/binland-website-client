import BodyContainer from 'ui/BodyContainer/BodyContainer'
import Hero from 'components/Hero/Hero'
import Services from 'components/Services/Services'
import Clients from 'components/Clients/Clients'
import ContactUs from 'components/ContactUs/ContactUs'

const Home = () => {
  return (
    <BodyContainer>
      <Hero />
      <Services />
      <Clients />
      <ContactUs />
    </BodyContainer>
  )
}

export default Home
