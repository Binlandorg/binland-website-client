import Quote from 'components/AboutUs/Quote/Quote'
import BinlandInformation from 'components/AboutUs/BinlandInformation/BinlandInformation'
import Founders from 'components/AboutUs/Founders/Founders'
import Office from 'components/AboutUs/Offices/Office'
import Team from 'components/AboutUs/Team/Team'
import BodyContainer from 'ui/BodyContainer/BodyContainer'

const AboutUs = () => {
  return (
    <BodyContainer>
      <Quote />
      <BinlandInformation />
      <Founders />
      <Team />
      <Office />
    </BodyContainer>
  )
}

export default AboutUs
