import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'
import { useEffect, useState } from 'react'

import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import Pagination from 'components/Pagination/Pagination'
import ClientItems from './ClientCards/ClientCards'
import { ExternalLink } from './ClientCards/ClientCards.styles'
import { clientBrands, clientsData } from './ClientsData'
import {
  SectionHero,
  HeroBackground,
  HeroContentWrapper,
  IconsWrapper,
  OurWorkWrapper,
} from './Clients.styles'
import { IClientCard } from 'types/components/clients'
import { IData } from 'types/components/pagination'

const Clients: React.FC = () => {
  const [items, setItems] = useState<IClientCard[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const pageCount = clientsData.length

  useEffect(() => {
    const initialItem = clientsData[currentPage - 1]
    setItems(initialItem)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const handlePageClick = (data: IData) => {
    const selectedPage = data.selected
    setCurrentPage(selectedPage + 1)
  }

  return (
    <>
      <SectionHero type="margin" size="xl" id="section-hero">
        <HeroBackground>
          <HeroContentWrapper>
            <div className="hero-text-wrapper">
              <h1 className="title-hero">our clients</h1>
              <p className="description-hero">
                Si disputa al la interes miradas ya decirte. Ch el capital
                casaron gozaban plateas se. Armino fulano fulgor van era.
                Distraigo verdadera oia del que simpatias soy reintegra.
              </p>
            </div>
            <IconsWrapper>
              {clientBrands.map((brand) => (
                <img
                  key={brand.id}
                  src={brand.src}
                  alt={brand.name}
                  className="img-brand"
                />
              ))}
            </IconsWrapper>
          </HeroContentWrapper>
        </HeroBackground>
        <Container size="lg">
          <OurWorkWrapper>
            <div className="our-works-content">
              <div>
                <SectionTitle text="our works" className="our-works-title" />
                <p className="our-works-description">
                  Si disputa al la interes miradas ya decirte. Ch el capital
                  casaron gozaban plateas se. Armino fulano fulgor van era.
                  Distraigo verdadera oia del que simpatias soy reintegra.
                </p>
              </div>
              <ButtonLink to="/" type="primary" className="button-see-all">
                Ver todos
                <TbExternalLink size={20} />
              </ButtonLink>
            </div>
            <div className="our-works-img">
              <div>
                <FaStar size={28} color="#F29D11" />
                <Link to="https://www.google.com" target="_BLANK">
                  <ExternalLink size={28} />
                </Link>
              </div>
              <div>
                <h3 className="our-works-client-name">Nombre de cliente</h3>
                <p className="our-works-client-description">
                  Si disputa al la interes miradas ya decirte. Ch el capital
                  casaron gozaban plateas se.
                </p>
              </div>
            </div>
          </OurWorkWrapper>
        </Container>
      </SectionHero>
      <Section size="xl" type="margin">
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          child={<ClientItems currentItems={items} />}
        />
      </Section>
    </>
  )
}

export default Clients
