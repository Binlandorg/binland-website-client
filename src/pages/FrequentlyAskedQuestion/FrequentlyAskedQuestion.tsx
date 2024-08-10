import useIntlMessages from 'hooks/useIntlMessages'
import FaqCard from 'components/FaqCard/FaqCard'
import StillHaveQuestion from 'components/StillHaveQuestion/StillHaveQuestion'
import {
  ContainerFaq,
  FaqQuestionsWrapper,
  FaqTitle,
  SectionFAQ,
  TitleWrapper,
} from './FrequentlyAskedQuestion.style'
import BodyContainer from 'ui/BodyContainer/BodyContainer'
import { questions } from './FrequentlyAskedQuestion.data'

const FrequenltyAskedQuestion = () => {
  const intl = useIntlMessages()

  return (
    <BodyContainer>
      <SectionFAQ id="frequently-asked-questions" size="lg" type="margin">
        <ContainerFaq size="xl">
          <TitleWrapper>
            <FaqTitle>{intl('frequently.asked.questions.title')}</FaqTitle>
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
