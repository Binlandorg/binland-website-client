import { BsArrowRight as IconArrowLeft } from "react-icons/bs"
import { FormattedMessage } from "react-intl"
import { LazyLoadImage } from "react-lazy-load-image-component"

import heroImgURL3 from "assets/images/people/front-view-young-lady.webp"
import heroImgURL2 from "assets/images/people/male-student-wearing-headphones-around-neck.webp"
import useIntlMessages from "hooks/useIntlMessages"
import useScrollbarWidth from "hooks/useScrollbarWidth"
import { colors } from "styles/colors"
import Container from "ui/Container/Container"
import Display from "ui/Display/Display"
import H5 from "ui/Titles/H5"
import noImageURL from "../../assets/images/no-image.png"
import heroImgURL from "./../../assets/images/people/girl-using-virtual-reality-glasses-cropped-v2.webp"
import {
	Content,
	ContentText,
	HeroContent,
	HeroContentWrapper,
	HeroSection,
	Image,
	ImageWrapper,
	NetworkWrapper,
	NetworkWrapperInside,
} from "./Hero.styles"
import SocialMediaBar from "./socialMediaBar/SocialMediaBar"

interface IHeroImgData {
	src: string
	alt: string
}

const heroImgData: IHeroImgData = {
	src: heroImgURL,
	alt: "Girl using virtual reality glasses",
}

const heroImgData2: IHeroImgData = {
	src: heroImgURL2,
	alt: "male student young wearing headphones around neck",
}

const heroImgData3: IHeroImgData = {
	src: heroImgURL3,
	alt: "front view young lady",
}

const Hero: React.FC = () => {
	const intl = useIntlMessages()
	const scrollbarWidth = useScrollbarWidth()

	return (
		<HeroSection id="hero" type="padding" size="sm">
			<Container size="xl" isfullwidth>
				<HeroContent $scrollbarwidth={scrollbarWidth}>
					<HeroContentWrapper>
						<NetworkWrapperInside>
							<SocialMediaBar type="secondary" direction="column" />
						</NetworkWrapperInside>
						<Image>
							<ImageWrapper>
								<picture>
									<source srcSet={noImageURL} media="(max-width: 1024px)" />
									<LazyLoadImage
										src={heroImgData.src}
										alt={heroImgData.alt}
										threshold={100}
										width={600}
										height={646}
									/>
								</picture>
								<picture>
									<source srcSet={noImageURL} media="(max-width: 1024px)" />
									<LazyLoadImage
										src={heroImgData2.src}
										alt={heroImgData2.alt}
										threshold={100}
										width={600}
										height={646}
									/>
								</picture>
								<picture>
									<source srcSet={noImageURL} media="(max-width: 1024px)" />
									<LazyLoadImage
										src={heroImgData3.src}
										alt={heroImgData3.alt}
										threshold={100}
										width={600}
										height={646}
									/>
								</picture>
							</ImageWrapper>
						</Image>
						<Content>
							<ContentText>
								<H5 $weight="bold" color={colors.white.main}>
									{intl("home.hero.subslogan")}
								</H5>
								<Display size="lg">
									<FormattedMessage
										id="home.hero.slogan"
										defaultMessage={intl("home.hero.slogan")}
										values={{
											b: (chunks) => <b>{chunks}</b>,
										}}
									/>
								</Display>
							</ContentText>
							<a href="/contact-us">
								<IconArrowLeft size={20} />
								<span>{intl("home.hero.contact.us.button.title")}</span>
							</a>
						</Content>
					</HeroContentWrapper>
					<NetworkWrapper>
						<SocialMediaBar type="secondary" direction="row" />
					</NetworkWrapper>
				</HeroContent>
			</Container>
		</HeroSection>
	)
}

export default Hero
