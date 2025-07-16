import { useRef } from "react"

import Reveal from "components/Reveal/Reveal"
import useHeightDifference from "hooks/useHeightDifference"
import useIntlMessages from "hooks/useIntlMessages"
import useIsTallerThan from "hooks/useIsTallerThan"
import { FormattedMessage } from "react-intl"
import Paragraph from "ui/Paragraph/Paragraph"
import cleanClass from "utils/cleanClass"
import HeroIMG from "../../../assets/images/people/screens-with-binland-website.webp"
import { H1Bold, HeroContainer, HeroSection } from "./Quote.styles"
import { HeroText, HeroWrapper } from "./Quote.styles"
import { Image, ImageContainer } from "./Quote.styles"

export const Quote: React.FC = () => {
	const intl = useIntlMessages()
	const titleRef = useRef<HTMLDivElement>(null)
	const textRef = useRef<HTMLDivElement>(null)

	const heightDiff = useHeightDifference(titleRef, textRef)
	const hasTitleInnerEdge = !useIsTallerThan(titleRef, textRef)
	const hasTextInnerEdge = !useIsTallerThan(textRef, titleRef)

	return (
		<HeroSection size="sm" type="margin">
			<HeroContainer size="xl" isfullwidth>
				<HeroWrapper>
					<HeroText $heightDiff={heightDiff}>
						<div
							className={cleanClass("title", hasTitleInnerEdge && "padding-none")}
							ref={titleRef}
						>
							<span className="border-radius-left-bottom" />
							<H1Bold>{intl("about.us.binland.information.title")}</H1Bold>
							<span
								className={cleanClass(
									"border-radius-right-bottom",
									!hasTitleInnerEdge && "display-none",
								)}
							/>
						</div>
						<div
							className={cleanClass("text", hasTextInnerEdge && "padding-none")}
							ref={textRef}
						>
							<span
								className={cleanClass(
									"border-radius-left-bottom",
									!hasTextInnerEdge && "display-none",
								)}
							/>
							<FormattedMessage
								id="about.us.binland.information.description"
								defaultMessage={intl("about.us.binland.information.description")}
								values={{ p: (chunks) => <Paragraph>{chunks}</Paragraph> }}
							/>
							<span className="border-radius-right-bottom" />
						</div>
					</HeroText>
					<ImageContainer $heightDiff={heightDiff}>
						<span className="overlay" />
						<Reveal>
							<Image src={HeroIMG} alt="" />
						</Reveal>
					</ImageContainer>
				</HeroWrapper>
			</HeroContainer>
		</HeroSection>
	)
}

export default Quote
