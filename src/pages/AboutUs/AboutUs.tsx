import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

import BodyContainer from 'ui/BodyContainer/BodyContainer'
import imageLinkPreview from '../../assets/images/image-link-preview.png'
import useIntlMessages from 'hooks/useIntlMessages'

const Quote = lazy(() => import('components/AboutUs/Quote/Quote'))
const Info = lazy(() => import('components/AboutUs/Information/Information'))
const WhatWeAre = lazy(() => import('components/AboutUs/WhatWeAre/WhatWeAre'))
const Founders = lazy(() => import('components/AboutUs/Founders/Founders'))
const Team = lazy(() => import('components/AboutUs/Team/Team'))
const Office = lazy(() => import('components/AboutUs/Offices/Office'))

const AboutUs = () => {
  const intl = useIntlMessages()

  return (
    <BodyContainer>
      <Helmet prioritizeSeoTags>
        <meta
          name="description"
          lang="en"
          content="Meet our team of software development experts at Binland. We turn ideas into innovative solutions, providing high-quality, personalized services to drive your business forward. Learn about our mission and vision."
        />
        <meta
          name="description"
          lang="es"
          content="Conoce a nuestro equipo de expertos en desarrollo de software. En Binland, transformamos ideas en soluciones innovadoras, ofreciendo servicios personalizados de alta calidad para impulsar tu negocio. Descubre nuestra misión y visión."
        />
        <meta property="og:image" content={imageLinkPreview} />
        <title>Binland - {intl('about.us.title')}</title>
      </Helmet>
      <Suspense>
        <Quote />
      </Suspense>
      <Suspense>
        <Info />
        <WhatWeAre />
        <Founders />
        <Team />
        <Office />
      </Suspense>
    </BodyContainer>
  )
}

export default AboutUs
