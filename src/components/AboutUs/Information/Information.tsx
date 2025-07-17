import Reveal from "components/Reveal/Reveal"
import useIntlMessages from "hooks/useIntlMessages"
import Display from "ui/Display/Display"
import CloseQuote from "ui/Icons/CloseQuote"
import OpenQuote from "ui/Icons/OpenQuote"
import Paragraph from "ui/Paragraph/Paragraph"
import H4 from "ui/Titles/H4"
import IMG from "../../../assets/images/people/screens-with-binland.webp"
import {
	HistoryContainer,
	HistoryText,
	Image,
	InfoContainer,
} from "./Information.styles"
import { InfoSection, QuoteContainer, Wrapper } from "./Information.styles"

const Information: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<InfoSection size="sm" type="margin">
			<InfoContainer size="xl" isfullwidth>
				<Wrapper>
					<QuoteContainer>
						<OpenQuote className="quote-icon" />
						<Display fontStyle="italic" size="sm" className="quote-text">
							{intl("about.us.binland.information.sub.title")}
						</Display>
						<CloseQuote className="quote-icon" />
					</QuoteContainer>
					<Reveal>
						<Image
							src={IMG}
							alt={intl("about.us.binland.information.history.image.alt")}
							loading="lazy"
						/>
					</Reveal>
					<HistoryContainer>
						<H4 $weight="bold" className="history-title">
							{intl("about.us.binland.information.history.title")}
						</H4>
						<HistoryText>
							<Paragraph>
								{intl("about.us.binland.information.history.text.one")}
							</Paragraph>
							<Paragraph>
								{intl("about.us.binland.information.history.text.two")}
							</Paragraph>
						</HistoryText>
					</HistoryContainer>
				</Wrapper>
			</InfoContainer>
		</InfoSection>
	)
}

export default Information
