import {
	COMPANY_PHONE_NUMBER,
	PERU_PHONE_CODE,
} from "context/constants/constans"
import useIntlMessages from "hooks/useIntlMessages"
import ButtonExternalLink from "ui/ButtonExternalLink/ButtonExternalLink"
import Check from "ui/Icons/Check"
import Star from "ui/Icons/Star"
import Paragraph from "ui/Paragraph/Paragraph"
import H2 from "ui/Titles/H2"
import H4 from "ui/Titles/H4"
import H5 from "ui/Titles/H5"
import { linkWhatsappFormatter } from "utils/formatters/formatters"
import type { IPricingCard } from "../../../types/components/PricingCard"
import PricingCardWrapStyles from "./PricingCard.styles"

const PricingCard: React.FC<IPricingCard> = ({
	title,
	description,
	currentPrice,
	previousPrice,
	includeTitle,
	include,
	buttonTitle,
	isHighlight,
	buttonSendMessage,
}) => {
	const intl = useIntlMessages()

	return (
		<PricingCardWrapStyles
			$isHighlight={isHighlight}
			className={isHighlight ? "highlight" : ""}
		>
			<H4 $weight="bold">{intl(title)}</H4>
			<div className="details">
				<Paragraph>{intl(description)}</Paragraph>
				<div className="price">
					{currentPrice && <H2>{intl(currentPrice)}</H2>}
					{previousPrice && <H5 $weight="bold">{intl(previousPrice)}</H5>}
				</div>
			</div>
			{include && includeTitle && (
				<div className="includes">
					<Paragraph className="include">{intl(includeTitle)}</Paragraph>
					<ul>
						{include.map(({ id, text }) => (
							<li className="include" key={id}>
								<span className="icon-check">
									<Star />
								</span>
								<Paragraph>{intl(text)}</Paragraph>
							</li>
						))}
					</ul>
				</div>
			)}
			<ButtonExternalLink
				className="cta"
				href={linkWhatsappFormatter(
					PERU_PHONE_CODE,
					COMPANY_PHONE_NUMBER,
					intl(buttonSendMessage),
				)}
				$variant={isHighlight ? "primary" : "secondary"}
				$style={isHighlight ? "solid" : "outline"}
			>
				{intl(buttonTitle)}
				<span className="icon-check">
					<Check />
				</span>
			</ButtonExternalLink>
		</PricingCardWrapStyles>
	)
}

export default PricingCard
