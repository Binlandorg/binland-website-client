import { Helmet } from "react-helmet-async"
import { FormattedMessage } from "react-intl"
import { useNavigate } from "react-router-dom"

import SVG from "assets/images/illustrations/work-in-progress.svg"
import OGImage from "assets/images/image-link-preview.webp"
import useIntlMessages from "hooks/useIntlMessages"
import BodyContainer from "ui/BodyContainer/BodyContainer"
import Button from "ui/Button/Button"
import ButtonText from "ui/ButtonText/ButtonText"
import H2 from "ui/Titles/H2"
import { getSiteOrigin } from "./UnderConstruction.helper"
import { Bottom, ColorText, CtaContainer } from "./UnderConstruction.styles"
import { Image, TextContainer, Wrapper } from "./UnderConstruction.styles"

const UnderConstruction = () => {
	const hostname = getSiteOrigin()
	const navigate = useNavigate()
	const intl = useIntlMessages()
	const metaDescription = intl("under.construction.description.sub.title")
	const metaTitle = intl("under.construction.title.tag")
	const ogImage = `${hostname}${OGImage}`
	const ogUrl = `${hostname}`

	const handleClick = () => {
		navigate("/")
	}

	return (
		<BodyContainer>
			<Helmet prioritizeSeoTags>
				<title>{metaTitle}</title>
				<meta name="title" content={metaTitle} />
				<meta name="description" content={metaDescription} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={ogUrl} />
				<meta property="og:title" content={metaTitle} />
				<meta property="og:description" content={metaDescription} />
				<meta property="og:image" content={ogImage} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={ogUrl} />
				<meta property="twitter:title" content={metaTitle} />
				<meta property="twitter:description" content={metaDescription} />
				<meta property="twitter:image" content={ogImage} />
			</Helmet>
			<Wrapper>
				<Image src={SVG} alt="Work in progress" />
				<Bottom>
					<TextContainer>
						<H2>
							<FormattedMessage
								id="under.construction.description.title"
								values={{
									span: (chunks) => <ColorText>{chunks}</ColorText>,
								}}
							/>
						</H2>
						<ButtonText $weight="semibold">
							{intl("under.construction.description.sub.title")}
						</ButtonText>
					</TextContainer>
					<CtaContainer>
						<Button onClick={handleClick}>
							{intl("under.construction.button.home")}
						</Button>
					</CtaContainer>
				</Bottom>
			</Wrapper>
		</BodyContainer>
	)
}

export default UnderConstruction
