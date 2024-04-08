import { TbSend } from 'react-icons/tb'

import {
  BackgroundService,
  ContentHero,
  TitleHero,
  SectionHero,
  WrapperHero,
} from './ServiceHero.style'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import { IServiceHero } from 'types/components/service'

const ServiceHero: React.FC<IServiceHero> = ({
  id,
  name,
  description,
  phraseQuote,
}) => {
  return (
    <BackgroundService id={id}>
      <SectionHero type="margin" size="xl">
        <WrapperHero size="xl">
          <ContentHero>
            <div>
              <p className="hero-sub-title">{phraseQuote} </p>
              <TitleHero>{name}</TitleHero>
              <span className="hero-description">{description}</span>
            </div>
            <div>
              <ButtonLink
                type="primary"
                to="/contact-us"
                size="lg"
                className="button-contact-us"
              >
                <span className="button-link-contact-us">Contactanos</span>
                <TbSend size={20} />
              </ButtonLink>
            </div>
          </ContentHero>
        </WrapperHero>
      </SectionHero>
    </BackgroundService>
  )
}

export default ServiceHero