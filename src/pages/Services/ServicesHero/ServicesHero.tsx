import SectionTitle from 'components/SectionTitle/SectionTitle'
import { HeroBackground, SectionHero } from './ServicesHero.styles'

const ServicesHero = () => {
  return (
    <SectionHero size="sm" type="margin">
      <HeroBackground>
        <div className="hero__content__wrapper">
          <SectionTitle className="hero__title" text="Servicios" />
          <div>
            <h4 className="hero__subtitle">
              Seguridad apoplejia mas sonadores alarmante dia dio consentir mal
            </h4>
            <p className="hero__description">
              Espeso pre por dos crisis exigia mal regazo. Muy reflexion los por
              expansion extraneza brigadier. Pidio hecho la mundo nuevo al
              serio.
            </p>
          </div>
        </div>
      </HeroBackground>
    </SectionHero>
  )
}
export default ServicesHero
