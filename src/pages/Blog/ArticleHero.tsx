import styled from 'styled-components'

import Section from 'ui/Section/Section'
import HeroImg from './../../assets/images/ClientsPage/mockup-ui-chat.webp'
import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'
// import Display from 'ui/Display/Display'

const SectionHero = styled(Section)`
  height: auto;
  min-width: 100%;
  margin: 0;
  padding: 0;
`

const HeroBackoground = styled.div`
  width: 100%;
  height: 22rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url(${HeroImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white.main};
`

const ContainerHeroContent = styled(Container)`
  align-items: flex-start;

  .author__details {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    .author__name {
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }

  .icons__wrapper {
    display: flex;
    flex-direction: 'column';
  }
`

const ArticleHero: React.FC = () => {
  return (
    <SectionHero type="margin" size="xl">
      <HeroBackoground>
        <ContainerHeroContent size="lg" isfullwidth>
          <div className="author__details">
            <p className="author__name">
              Mariano Sevallos S. - 27 de febrero de 2024
            </p>
            <button>boton con icono dentro</button>
          </div>
          {/* <Display size="md">
            Intervalos consistido id existencia superiores victorioso la
            chabacanos lo.
          </Display> */}
          <div>icons here</div>
        </ContainerHeroContent>
      </HeroBackoground>
    </SectionHero>
  )
}
export default ArticleHero
