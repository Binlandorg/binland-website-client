import { Helmet } from "react-helmet-async"
import { FaArrowRight } from "react-icons/fa6"
import { LazyLoadImage } from "react-lazy-load-image-component"

import useIntlMessages from "hooks/useIntlMessages"
import { colors } from "styles/colors"
import BodyContainer from "ui/BodyContainer/BodyContainer"
import ButtonLink from "ui/ButtonLink/ButtonLink"
import Display from "ui/Display/Display"
import H4 from "ui/Titles/H4"
import NotFoundImg from "../../assets/images/illustrations/not-found.svg"
import imageLinkPreview from "../../assets/images/image-link-preview.webp"
import {
	ImageWrapper,
	MessageWrapper,
	StyledPageNotFound,
} from "./PageNotFound.style"

const PageNotFound = () => {
	const intl = useIntlMessages()

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<meta
					name="description"
					lang="en"
					content="Sorry, the page you're looking for is not available."
				/>
				<meta
					name="description"
					lang="es"
					content="Lo sentimos, la página que buscas no está disponible."
				/>
				<meta property="og:image" content={imageLinkPreview} />
				<title>{intl("page.not.found.title.tag")}</title>
			</Helmet>
			<StyledPageNotFound size="xl">
				<MessageWrapper>
					<Display size="md" className="error-page-title">
						{intl("page.not.found.title")}
					</Display>
					<H4 $weight="medium" color={colors.black.main}>
						{intl("page.not.found.sub.title")}
					</H4>
				</MessageWrapper>
				<ImageWrapper>
					<LazyLoadImage
						src={NotFoundImg}
						alt="Page-Not-Found"
						className="not-found-img"
						width={696}
						height={418}
					/>
				</ImageWrapper>
				<ButtonLink to={"/"} $variant="secondary" $style="outline">
					{intl("page.not.found.button.to.home")}
					<FaArrowRight size={14} />
				</ButtonLink>
			</StyledPageNotFound>
		</BodyContainer>
	)
}

export default PageNotFound
