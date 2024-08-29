import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom'

/** TODO: Uncomment code when page is ready to be production */

import Layout from 'components/Layout/Layout'
import Home from 'pages/Home/Home'
import AboutUs from 'pages/AboutUs/AboutUs'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import PrivacyPolicy from 'pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from 'pages/TermsOfService/TermsOfService'
import FrequenltyAskedQuestion from 'pages/FrequentlyAskedQuestion/FrequentlyAskedQuestion'
import ContactUs from 'pages/ContactUs/ContactUs'
// import Portafolio from 'pages/Portafolio/Portafolio'
// import LetsLearn from 'pages/LetsLearn/LetsLearn'
// import Services from 'pages/Services/Services'
// import Clients from 'pages/Clients/Clients'
// import Blog from 'pages/Blog/Blog'
// import Seo from 'pages/Services/Seo/Seo'
// import Saas from 'pages/Saas/Saas'
// import Article from 'pages/Article/Article'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="/clients" element={<Clients />} /> */}
      {/* <Route path="/saas" element={<Saas />} /> */}
      {/* <Route path="/portafolio" element={<Portafolio />} /> */}
      {/* <Route path="/lets-learn" element={<LetsLearn />} /> */}
      <Route path="/about-us" element={<AboutUs />} />
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/services/seo" element={<Seo />} /> */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/contact-us" element={<ContactUs />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/blog/:article-name" element={<Article />} /> */}
      <Route
        path="/frequently-asked-question"
        element={<FrequenltyAskedQuestion />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

export default router
