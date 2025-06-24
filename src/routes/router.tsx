import { lazy } from "react"
/* eslint-disable react-refresh/only-export-components */
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"

/** TODO: Uncomment code when page is ready to be production */

import Layout from "components/Layout/Layout"

const Home = lazy(() => import("pages/Home/Home"))
const AboutUs = lazy(() => import("pages/AboutUs/AboutUs"))
const ContactUs = lazy(() => import("pages/ContactUs/ContactUs"))
const PageNotFound = lazy(() => import("pages/PageNotFound/PageNotFound"))
const PrivacyPolicy = lazy(() => import("pages/PrivacyPolicy/PrivacyPolicy"))
const FrequentlyAskedQuestion = lazy(
	() => import("pages/FrequentlyAskedQuestion/FrequentlyAskedQuestion"),
)
const TermsOfService = lazy(() => import("pages/TermsOfService/TermsOfService"))
const Portfolio = lazy(() => import("pages/Portfolio/Portfolio"))

// Uncomment the following when pages are ready
// const Clients = lazy(() => import('pages/Clients/Clients'))
// const Saas = lazy(() => import('pages/Saas/Saas'))
// const Portafolio = lazy(() => import('pages/Portafolio/Portafolio'))
// const LetsLearn = lazy(() => import('pages/LetsLearn/LetsLearn'))
// const Services = lazy(() => import('pages/Services/Services'))
// const Seo = lazy(() => import('pages/Services/Seo/Seo'))
// const Blog = lazy(() => import('pages/Blog/Blog'))
// const Article = lazy(() => import('pages/Article/Article'))

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			{/* <Route path="/clients" element={<Clients />} /> */}
			{/* <Route path="/saas" element={<Saas />} /> */}
			<Route path="/portfolio" element={<Portfolio />} />
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
				element={<FrequentlyAskedQuestion />}
			/>
			<Route path="*" element={<PageNotFound />} />
		</Route>,
	),
)

export default router
