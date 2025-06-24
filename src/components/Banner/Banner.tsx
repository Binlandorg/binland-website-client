import { BsWhatsapp } from "react-icons/bs"

import { COMPANY_PHONE_NUMBER } from "context/constants/constans"
import { PERU_PHONE_CODE } from "context/constants/constans"
import useIntlMessages from "hooks/useIntlMessages"
import ButtonExternalLink from "ui/ButtonExternalLink/ButtonExternalLink"
import ButtonText from "ui/ButtonText/ButtonText"
import Paragraph from "ui/Paragraph/Paragraph"
import { linkWhatsappFormatter } from "utils/formatters/formatters"
import { BannerWrapper } from "./Banner.styles"

const Banner: React.FC = () => {
	const intl = useIntlMessages()
	const linkWhatsapp = linkWhatsappFormatter(
		PERU_PHONE_CODE,
		COMPANY_PHONE_NUMBER,
		"",
	)

	return (
		<BannerWrapper>
			<div className="banner-text">
				<ButtonText className="title">{intl("portfolio.banner.title")}</ButtonText>
				<Paragraph $fontsize={12} className="sub-title">
					{intl("portfolio.banner.sub.title")}
				</Paragraph>
			</div>
			<ButtonExternalLink href={linkWhatsapp}>
				{intl("portfolio.banner.button.label")} <BsWhatsapp />
			</ButtonExternalLink>
		</BannerWrapper>
	)
}

export default Banner
