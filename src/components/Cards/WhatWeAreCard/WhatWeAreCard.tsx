import Reveal from "components/Reveal/Reveal"

import useIntlMessages from "hooks/useIntlMessages"
import { breakpoints } from "shared/breakpoints"
import type { IWhatWeAre } from "types/ui/cards"
import Paragraph from "ui/Paragraph/Paragraph"
import H3 from "ui/Titles/H3"
import { CardWrapper, WhatWeAreImg } from "./WhatWeAreCard.styles"

const WhatWeAreCard: React.FC<IWhatWeAre> = (props) => {
	const intl = useIntlMessages()
	return (
		<CardWrapper>
			<div className="info">
				<H3 $weight="bold">{intl(props.title).toUpperCase()}</H3>
				<Paragraph className="mision__description">
					{intl(props.description)}
				</Paragraph>
			</div>
			<Reveal>
				<picture>
					<source
						srcSet={props.img.srcMobile}
						media={`(max-width: ${breakpoints.sm})`}
					/>
					<WhatWeAreImg
						width={props.img.width}
						height={props.img.height}
						src={props.img.src}
						alt={intl(props.img.alt)}
					/>
				</picture>
			</Reveal>
		</CardWrapper>
	)
}

export default WhatWeAreCard
