import useIntlMessages from "hooks/useIntlMessages"
import Container from "ui/Container/Container"
import Display from "ui/Display/Display"
import CloseQuote from "ui/Icons/CloseQuote"
import OpenQuote from "ui/Icons/OpenQuote"
import Section from "ui/Section/Section"
import { QuoteWrapper, StyledQuote } from "./Quote.styles"

export const Quote: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<Section size="sm" type="margin">
			<Container size="xl" isfullwidth>
				<StyledQuote>
					<QuoteWrapper>
						<div>
							<span className="icon-open-quote">
								<OpenQuote />
							</span>
						</div>
						<div>
							<Display size="sm" className="quote">
								{intl("about.us.quote.description")}
							</Display>
						</div>
						<div>
							<span className="icon-close-quote">
								<CloseQuote />
							</span>
						</div>
					</QuoteWrapper>
				</StyledQuote>
			</Container>
		</Section>
	)
}

export default Quote
