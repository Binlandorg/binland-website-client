import Quote from 'components/AboutUs/Quote/Quote'
import Founders from 'components/AboutUs/Founders/Founders'
import Office from 'components/AboutUs/Offices/Office'
import Team from 'components/AboutUs/Team/Team'
import BodyContainer from 'ui/BodyContainer/BodyContainer'
import Information from 'components/AboutUs/Information/Information'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import { getAboutUsInformation } from 'services/aboutUsService'
import { useLanguageContext } from 'context/Language/useLanguageContext'

interface IFounderData {
  id: string
  fullName: string
  position: string
  quote: string
}

export interface IAboutUsInfo {
  quote: string,
  founders: IFounderData[]
}

const AboutUs = () => {
  const [aboutUsInfo, setAboutUsInfo] = useState<IAboutUsInfo>({} as IAboutUsInfo)
  const { language } = useLanguageContext()

  useEffect(() => {
    getAboutUsInformation(language.locale).then((data) => setAboutUsInfo(data))
  }, [language])

  return (
    <BodyContainer>
      <Quote text={aboutUsInfo.quote} />
      <Information />
      <Founders founders={aboutUsInfo.founders}/>
      <Team />
      <Office />
    </BodyContainer>
  )
}

export default AboutUs
