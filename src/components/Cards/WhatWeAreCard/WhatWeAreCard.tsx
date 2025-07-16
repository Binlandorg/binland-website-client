import Reveal from "components/Reveal/Reveal"

import useIntlMessages from "hooks/useIntlMessages"
import type { IWhatWeAre } from "types/ui/cards"
import Paragraph from "ui/Paragraph/Paragraph"
import H4 from "ui/Titles/H4"
import { CardWrapper } from "./WhatWeAreCard.styles"

const WhatWeAreCard: React.FC<IWhatWeAre> = (props) => {
	const intl = useIntlMessages()

	return (
		<CardWrapper className={props.className}>
			<Reveal>{props.icon}</Reveal>
			<div className="info-wrapper">
				<H4 $weight="bold">{intl(props.title).toUpperCase()}</H4>
				<Paragraph className="info-description">
					{intl(props.description)}
				</Paragraph>
			</div>
		</CardWrapper>
	)
}

export default WhatWeAreCard
