import { LazyLoadImage } from 'react-lazy-load-image-component'
import { BsArrowRight as IconArrowLeft } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'

import useIntlMessages from 'hooks/useIntlMessages'
import SocialMediaBar from './socialMediaBar/SocialMediaBar'
import {
  ContentText,
  HeroContentWrapper,
  Content,
  ImageWrapper,
  NetworkWrapper,
  NetworkWrapperInside,
  HeroSection,
  HeroContent,
  Image,
} from './Hero.styles'
import H5 from 'ui/Titles/H5'
import Display from 'ui/Display/Display'
import heroImgURL from './../../assets/images/people/girl-using-virtual-reality-glasses-cropped-v2.webp'
import noImageURL from '../../assets/images/no-image.png'
import Container from 'ui/Container/Container'
import { colors } from 'styles/colors'
import useScrollbarWidth from 'hooks/useScrollbarWidth'

interface IHeroImgData {
  src: string
  alt: string
}

const heroImgData: IHeroImgData = {
  src: heroImgURL,
  alt: 'Girl using virtual reality glasses',
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
              </ImageWrapper>
            </Image>
            <Content>
              <ContentText>
                <H5 $weight="bold" color={colors.white.main}>
                  {intl('home.hero.subslogan')}
                </H5>
                <Display size="lg">
                  <FormattedMessage
                    id="home.hero.slogan"
                    defaultMessage={intl('home.hero.slogan')}
                    values={{
                      b: (chunks) => <b>{chunks}</b>,
                    }}
                  />
                </Display>
              </ContentText>
              <a href="/contact-us">
                <IconArrowLeft size={20} />
                <span>{intl('home.hero.contact.us.button.title')}</span>
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
