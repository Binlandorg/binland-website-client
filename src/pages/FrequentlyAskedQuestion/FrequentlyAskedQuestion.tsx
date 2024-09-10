import { Helmet } from 'react-helmet-async'

import useIntlMessages from 'hooks/useIntlMessages'
import FaqCard from 'components/FaqCard/FaqCard'
import StillHaveQuestion from 'components/StillHaveQuestion/StillHaveQuestion'
import {
  ContainerFaq,
  FaqQuestionsWrapper,
  SectionFAQ,
  TitleWrapper,
} from './FrequentlyAskedQuestion.style'
import BodyContainer from 'ui/BodyContainer/BodyContainer'
import H1 from 'ui/Titles/H1'
import { questions } from './FrequentlyAskedQuestion.data'
import imageLinkPreview from '../../assets/images/image-link-preview.png'

const FrequenltyAskedQuestion = () => {
  const intl = useIntlMessages()

  return (
    <BodyContainer>
      <Helmet prioritizeSeoTags>
        <meta
          name="description"
          lang="en"
          content="Find answers to frequently asked questions about our software development services. At Binland, we address your queries and provide the information you need to make informed decisions. Explore our FAQ section."
        />
        <meta
          name="description"
          lang="es"
          content="Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios de desarrollo de software. En Binland, resolvemos tus dudas y te ofrecemos la información que necesitas para tomar decisiones informadas. Explora nuestra sección de preguntas frecuentes."
        />
        <meta property="og:image" content={imageLinkPreview} />
        <title>Binland - {intl('frequently.asked.questions.title')}</title>
      </Helmet>
      <SectionFAQ id="frequently-asked-questions" size="lg" type="margin">
        <ContainerFaq size="xl">
          <TitleWrapper>
            <H1>{intl('frequently.asked.questions.title')}</H1>
          </TitleWrapper>
          <FaqQuestionsWrapper size="sm">
            {questions.map((question) => {
              return (
                <FaqCard
                  key={question.id}
                  question={intl(question.question)}
                  answer={intl(question.answer)}
                />
              )
            })}
            <StillHaveQuestion />
          </FaqQuestionsWrapper>
        </ContainerFaq>
      </SectionFAQ>
    </BodyContainer>
  )
}

export default FrequenltyAskedQuestion
