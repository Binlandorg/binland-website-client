import { FaArrowRight } from 'react-icons/fa6'

import { ImageWrapper, MessageWrapper, StyledPageNotFound } from './PageNotFound.style'
import BodyContainer from "ui/BodyContainer/BodyContainer"
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import NotFoundImg from '../../assets/images/imgPageNotFound/PageNotFound.svg'
import useIntlMessages from 'hooks/useIntlMessages'
import H4 from 'ui/Titles/H4'
import Display from 'ui/Display/Display'
import Paragraph from 'ui/Paragraph/Paragraph'
import { colors } from 'styles/colors'

const PageNotFound = () => {
  const intl = useIntlMessages()
  
  return <BodyContainer>
    <StyledPageNotFound size='xl'>
      <MessageWrapper>
        <Display size="md" className="error-page-title">
            {intl('page.not.found.title')}
        </Display>
        <H4 $weight="medium" color={colors.black.main}>
          {intl('page.not.found.sub.title')}
        </H4>
      </MessageWrapper>
      <ImageWrapper>
        <img src={NotFoundImg} alt="Page-Not-Found" className="not-found-img" />
      </ImageWrapper>
      <ButtonLink to={'/'} type={'secondary'}>
        <Paragraph $weight="regular" $style="normal">
          {intl('page.not.found.button.to.home')}
        </Paragraph>
        <FaArrowRight size={14} />
      </ButtonLink>
    </StyledPageNotFound>
  </BodyContainer>
}

export default PageNotFound
