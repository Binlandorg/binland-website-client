import useIntlMessages from 'hooks/useIntlMessages'
import { HeroBackground, SectionHero } from './ServicesHero.styles'
import H1 from 'ui/Titles/H1'

const ServicesHero = () => {
  const intl = useIntlMessages()

  return (
    <SectionHero size="sm" type="margin">
      <HeroBackground>
        <div className="hero__content__wrapper">
          <H1>{intl("services.hero.title")}</H1>
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
