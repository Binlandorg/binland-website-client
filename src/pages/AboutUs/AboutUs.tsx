import Quote from 'components/AboutUs/Quote/Quote'
import Founders from 'components/AboutUs/Founders/Founders'
import Office from 'components/AboutUs/Offices/Office'
import Team from 'components/AboutUs/Team/Team'
import BodyContainer from 'ui/BodyContainer/BodyContainer'
import Information from 'components/AboutUs/Information/Information'

const AboutUs = () => {
  return (
    <BodyContainer>
      <Quote />
      <Information />
      <Founders />
      <Team />
      <Office />
    </BodyContainer>
  )
}

export default AboutUs
