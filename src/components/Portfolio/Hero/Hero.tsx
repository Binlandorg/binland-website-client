import HeroIMG from "assets/images/mockups/mockup-ui-chat.webp"
import useIntlMessages from "hooks/useIntlMessages"
import H1 from "ui/Titles/H1"
import H5 from "ui/Titles/H5"
import { HeroWrapper, SectionHero } from "./Hero.styles"
import { HeroContent } from "./Hero.styles"

const Hero: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<SectionHero size="sm" type="margin">
			<HeroWrapper>
				<picture>
					<img src={HeroIMG} alt={intl("portfolio.hero.image.alt")} />
				</picture>
				<HeroContent>
					<H1>{intl("portfolio.hero.title")}</H1>
					<H5 $weight="regular">{intl("portfolio.hero.sub.title")}</H5>
				</HeroContent>
			</HeroWrapper>
		</SectionHero>
	)
}

export default Hero
