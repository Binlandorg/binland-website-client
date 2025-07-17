import { Suspense, lazy } from "react"
import { Helmet } from "react-helmet-async"

import useIntlMessages from "hooks/useIntlMessages"
import BodyContainer from "ui/BodyContainer/BodyContainer"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"
import { Wrapper } from "./AboutUs.styles"

const Quote = lazy(() => import("components/AboutUs/Quote/Quote"))
const Info = lazy(() => import("components/AboutUs/Information/Information"))
const WhatWeAre = lazy(() => import("components/AboutUs/WhatWeAre/WhatWeAre"))
const Founders = lazy(() => import("components/AboutUs/Founders/Founders"))
const Team = lazy(() => import("components/AboutUs/Team/Team"))
/** TODO: When we have our own offices **/
// const Office = lazy(() => import("components/AboutUs/Offices/Office"))

const AboutUs = () => {
	const intl = useIntlMessages()

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Meet about our software development team."
				/>
				<meta
					name="description"
					lang="es"
					content="Conoce a nuestro equipo de desarrollo de software."
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("about.us.title.tag")}</title>
			</Helmet>
			<Wrapper>
				<Suspense>
					<Quote />
				</Suspense>
				<Suspense>
					<Info />
					<WhatWeAre />
					<Founders />
					<Team />
					{/* <Office /> */}
				</Suspense>
			</Wrapper>
		</BodyContainer>
	)
}

export default AboutUs
