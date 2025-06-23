import useIntlMessages from "hooks/useIntlMessages"
import Container from "ui/Container/Container"
import H2 from "ui/Titles/H2"
import Brandings from "./Brandings"
import {
	ClientsSection,
	ClientsSectionContent,
	ClientsSectionWrapper,
	TitleAndButtonSection,
	TitleLine,
} from "./Clients.styles"

const Clients: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<ClientsSection id="clients" size="lg" type="margin">
			<Container size="xl" isfullwidth>
				<ClientsSectionWrapper>
					<ClientsSectionContent>
						<TitleAndButtonSection>
							<H2>
								{intl("home.clients.section.title")}
								<span className="span-point">.</span>
							</H2>
							<TitleLine />
						</TitleAndButtonSection>
						<Brandings />
					</ClientsSectionContent>
				</ClientsSectionWrapper>
			</Container>
		</ClientsSection>
	)
}

export default Clients
