import PricingCard from "components/Cards/PricingCard/PricingCard"
import useIntlMessages from "hooks/useIntlMessages"
import Container from "ui/Container/Container"
import Paragraph from "ui/Paragraph/Paragraph"
import Section from "ui/Section/Section"
import H2 from "ui/Titles/H2"
import data from "./Pricing.data"
import PricingContainer from "./Pricing.styles"

const Princing: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<Section type="padding" size="md">
			<Container size="xl">
				<PricingContainer>
					<H2 withDot>{intl("home.pricing.title")}</H2>
					<Paragraph className="description">
						{intl("home.pricing.description")}
					</Paragraph>
					<ul className="packages">
						{data?.map(({ id, ...rest }) => (
							<li key={id}>
								<PricingCard {...rest} />
							</li>
						))}
					</ul>
				</PricingContainer>
			</Container>
		</Section>
	)
}

export default Princing
