import { IWhyService } from 'types/components/service'
import {
  TitleQuestion,
  TitleResponse,
  WrapperQuestion,
  WrapperQuestionService,
} from './WhyService.style'

export const WhyService: React.FC<IWhyService> = ({
  question,
  answer,
  image,
}) => {
  return (
    <WrapperQuestion type="padding" size="sm">
      <WrapperQuestionService>
        <TitleQuestion>{question}</TitleQuestion>
        <TitleResponse>{answer}</TitleResponse>
      </WrapperQuestionService>
      <img src={image} alt="image-service" className="img-service" />
    </WrapperQuestion>
  )
}

export default WhyService
