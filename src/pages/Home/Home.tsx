import Hero from 'components/Hero/Hero'
import Services from 'components/Services/Services'
import Clients from 'components/Clients/Clients'
import ContactUs from 'components/ContactUs/ContactUs'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <ContactUs id="home-contact-us"/>
    </>
  )
}

export default Home
