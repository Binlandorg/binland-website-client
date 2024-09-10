import { FaArrowRight } from 'react-icons/fa6'
import { Helmet } from 'react-helmet-async'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import {
  ImageWrapper,
  MessageWrapper,
  StyledPageNotFound,
} from './PageNotFound.style'
import BodyContainer from 'ui/BodyContainer/BodyContainer'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import useIntlMessages from 'hooks/useIntlMessages'
import H4 from 'ui/Titles/H4'
import Display from 'ui/Display/Display'
import Paragraph from 'ui/Paragraph/Paragraph'
import { colors } from 'styles/colors'
import NotFoundImg from '../../assets/images/imgPageNotFound/PageNotFound.svg'
import imageLinkPreview from '../../assets/images/image-link-preview.png'

const PageNotFound = () => {
  const intl = useIntlMessages()

  return (
    <BodyContainer>
      <Helmet prioritizeSeoTags>
        <meta
          name="description"
          lang="en"
          content="Sorry, the page you’re looking for is not available. At Binland, we’re here to help. You can return to the homepage or explore other sections of our site to find the information you need."
        />
        <meta
          name="description"
          lang="es"
          content="Lo sentimos, la página que buscas no está disponible. En Binland, estamos aquí para ayudarte. Puedes volver a la página de inicio o explorar otras secciones de nuestro sitio para encontrar la información que necesitas."
        />
        <meta property="og:image" content={imageLinkPreview} />
        <title>Binland - {intl('page.not.found.tab.title')}</title>
      </Helmet>
      <StyledPageNotFound size="xl">
        <MessageWrapper>
          <Display size="md" className="error-page-title">
            {intl('page.not.found.title')}
          </Display>
          <H4 $weight="medium" color={colors.black.main}>
            {intl('page.not.found.sub.title')}
          </H4>
        </MessageWrapper>
        <ImageWrapper>
          <LazyLoadImage
            src={NotFoundImg}
            alt="Page-Not-Found"
            className="not-found-img"
            width={696}
            height={418}
          />
        </ImageWrapper>
        <ButtonLink to={'/'} type={'secondary'}>
          <Paragraph $weight="regular" $style="normal">
            {intl('page.not.found.button.to.home')}
          </Paragraph>
          <FaArrowRight size={14} />
        </ButtonLink>
      </StyledPageNotFound>
    </BodyContainer>
  )
}

export default PageNotFound
