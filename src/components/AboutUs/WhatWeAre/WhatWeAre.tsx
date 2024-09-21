import useIntlMessages from "hooks/useIntlMessages"
import Section from "ui/Section/Section"
import WhatWeAreCard from "../../Cards/WhatWeAreCard/WhatWeAreCard"
import { whatWeAreData } from "./WhatWeAre.data"
import { SectionWhatWeAre, WhatWeAreWrapper } from "./WhatWeAre.styles"

const WhatWeAre: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<SectionWhatWeAre
			title={intl("about.us.what.we.are.title")}
			titlePosition="right"
		>
			<Section type="padding" size="lg">
				<WhatWeAreWrapper>
					{whatWeAreData.map((element) => (
						<WhatWeAreCard key={element.id} {...element} />
					))}
				</WhatWeAreWrapper>
			</Section>
		</SectionWhatWeAre>
	)
}
export default WhatWeAre
