import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout/Layout'
import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import PrivacyPolicy from 'pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from 'pages/TermsOfService/TermsOfService'
import FrequenltyAskedQuestion from 'pages/FrequentlyAskedQuestion/FrequentlyAskedQuestion'
import Portafolio from 'pages/Portafolio/Portafolio'
import LetsLearn from 'pages/LetsLearn/LetsLearn'
import Services from 'pages/Services/Services'
import Clients from 'pages/Clients/Clients'
import Blog from 'pages/Blog/Blog'
import Seo from 'pages/Services/Seo/Seo'
import Saas from 'pages/Saas/Saas'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/saas" element={<Saas />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/lets-learn" element={<LetsLearn />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/frequently-asked-question"
          element={<FrequenltyAskedQuestion />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
