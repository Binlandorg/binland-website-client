import Container from 'ui/Container/Container'
import Quote from 'components/AboutUs/Quote/Quote'
import BinlandInformation from 'components/AboutUs/BinlandInformation/BinlandInformation'
import Founders from 'components/AboutUs/Founders/Founders'
import Office from 'components/AboutUs/Offices/Office'
import { Collaborators } from 'components/AboutUs/Collaborators/Collaborators'

const AboutUs = () => {
  return (
    <Container size="xl" isfullwidth>
      <Quote />
      <BinlandInformation />
      <Founders />
      <Collaborators />
      <Office />
    </Container>
  )
}

export default AboutUs
