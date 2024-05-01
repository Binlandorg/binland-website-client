import { BsArrowRight } from 'react-icons/bs'

//import ButtonLink from 'ui/ButtonLink/ButtonLink'
import { SectionHero } from './Hero.styles'
import SocialMediaBar from './socialMediaBar/SocialMediaBar'
import imgHero from './../../assets/images/imgHome/home-hero.svg'
import Button from 'ui/Button/Button'

const Hero = () => {
  return (
    <SectionHero>
      <div className="full-width-left-side">
        <div className="hero-content">
          <div>
            <SocialMediaBar type="primary" direction="column" />
          </div>
          <img src={imgHero} />
          <div>
            <p className="small-message">Algo interesante!</p>
            <h2 className="hero-message">
              Algo mas <span className="span-black">interesante</span> que lo
              anterior
            </h2>
            <a className='temporary-anchor' href="/#home-contact-us">
              <Button type="secondary" className="button-contact-us">
                <BsArrowRight size={20} />
                Contáctanos
              </Button>
            </a>
            {/* <ButtonLink
              type="secondary"
              to="/contact-us"
              className="button-contact-us"
            >
              <BsArrowRight size={20} />
              Contáctanos
            </ButtonLink> */}
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
