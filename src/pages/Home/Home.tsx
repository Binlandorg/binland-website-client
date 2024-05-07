import BodyContainer from 'ui/BodyContainer/BodyContainer'
import Hero from 'components/Hero/Hero'
import Services from 'components/Services/Services'
import Clients from 'components/Clients/Clients'
import ContactUs from 'components/ContactUs/ContactUs'
import Container from 'ui/Container/Container'

const Home = () => {
  return (
    <BodyContainer>
      <Container size='xl' isfullwidth>
        <Hero />
        <Services />
        <Clients />
        <ContactUs />
      </Container>
    </BodyContainer>
  )
}

export default Home
