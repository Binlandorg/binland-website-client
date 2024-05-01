import { FaArrowRight } from 'react-icons/fa6'

import { ImageWrapper, MessageWrapper, StyledPageNotFound } from './PageNotFound.style'
import BodyContainer from "ui/BodyContainer/BodyContainer"
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import NotFoundImg from '../../assets/images/imgPageNotFound/PageNotFound.svg'

const PageNotFound = () => {
  return <BodyContainer>
    <StyledPageNotFound size='xl'>
      <MessageWrapper>
        <h2 className="error-page-title">ups!</h2>
        <p className="error-page-sub-title">Creo que te extraviaste...</p>
      </MessageWrapper>
      <ImageWrapper>
        <img src={NotFoundImg} alt="Page-Not-Found" className="not-found-img" />
      </ImageWrapper>
      <ButtonLink to={'/'} type={'secondary'}>
        <p className="button-not-found">Regresar al Inicio</p>
        <FaArrowRight size={20} />
      </ButtonLink>
    </StyledPageNotFound>
  </BodyContainer>
}

export default PageNotFound
