import useIntlMessages from "hooks/useIntlMessages"
import { colors } from "styles/colors"
import Section from "ui/Section/Section"
import H2 from "ui/Titles/H2"
import WhatWeAreCard from "../../Cards/WhatWeAreCard/WhatWeAreCard"
import { whatWeAreData } from "./WhatWeAre.data"
import { WhatWeAreWrapper, Wrapper } from "./WhatWeAre.styles"

const WhatWeAre: React.FC = () => {
	const intl = useIntlMessages()
	return (
		<Section type="padding" size="lg">
			<Wrapper>
				<span className="icon">
					<svg
						width="70%"
						height="115%"
						viewBox="0 0 588 673"
						fill="none"
						preserveAspectRatio="none"
					>
						<title>What We Are</title>
						<path
							opacity="0.5"
							d="M2 26V142C2 155.255 12.7452 166 26 166H263C276.255 166 287 176.745 287 190V647.5C287 660.755 297.745 671.5 311 671.5H562.5C575.755 671.5 586.5 660.755 586.5 647.5V26C586.5 12.7452 575.755 2 562.5 2H26C12.7452 2 2 12.7452 2 26Z"
							stroke={colors.primary.main}
							strokeWidth="3"
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
				</span>
				<H2 withDot>{intl("about.us.what.we.are.title").toUpperCase()}</H2>
				<WhatWeAreWrapper>
					{whatWeAreData.map((element) => (
						<WhatWeAreCard key={element.id} {...element} className="card" />
					))}
				</WhatWeAreWrapper>
			</Wrapper>
		</Section>
	)
}
export default WhatWeAre
