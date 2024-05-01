import { BsArrowRight } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'
// import useElementSize from '@custom-react-hooks/use-element-size'

//import ButtonLink from 'ui/ButtonLink/ButtonLink'
import { SectionHero } from './Hero.styles'
import SocialMediaBar from './socialMediaBar/SocialMediaBar'
import imgHero from './../../assets/images/girl-using-virtual-reality-glasses-cropped.webp'
import useIntlMessages from 'hooks/useIntlMessages'
import Display from 'ui/Display/Display'
import { CustomMessageHero } from './Hero.styles'

const Hero = () => {
  const intl = useIntlMessages()
  console.log(intl)

  return (
    <SectionHero>
      <div className="full-width-left-side">
        <div className="hero-content">
          <div>
            <SocialMediaBar type="primary" direction="column" />
          </div>
          <img className="img__hero" src={imgHero} />
          <div>
            <p className="small-message">{intl('home.hero.subslogan')}</p>
            <Display className="hero-message" size="lg">
              <FormattedMessage
                defaultMessage=""
                id="home.hero.slogan"
                values={{
                  service: intl('home.hero.slogan'),
                  b: (str) => <CustomMessageHero>{str}</CustomMessageHero>,
                }}
              />
            </Display>
            <ButtonLink
              type="secondary"
              to="/contact-us"
              className="button-contact-us"
            >
              <BsArrowRight size={20} />
              {intl('home.hero.contact.us.button.title')}
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="social-bar-horizontal">
        <SocialMediaBar type="secondary" direction="row" />
      </div>
    </SectionHero>
  )
}

export default Hero
