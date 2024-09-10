import { LazyLoadImage } from 'react-lazy-load-image-component'

import freenlance from '../../../assets/images/imgSeo/freenlance.svg'
import {
  TitleQuestion,
  TitleResponse,
  WrapperQuestion,
  WrapperQuestionSeo,
} from './Question.style'

export const Question = () => {
  return (
    <WrapperQuestion type="padding" size="sm">
      <WrapperQuestionSeo>
        <TitleQuestion>
          ¿Por qué <span className="title-question-seo">seo</span>?
        </TitleQuestion>
        <TitleResponse>
          Pueblo lengua mar franca con bronce tienes una. La sala al el mano
          eran sr unos. Juzgado picante te aureola lo dificil oh holgada. La
          tentandole la excelentes mamarracho confidente. Tierno ahi piedra
          formas molino tan pan tio. Aun clasicismo habilitado sin hoy tan
          pretension despertado.
        </TitleResponse>
      </WrapperQuestionSeo>
      <LazyLoadImage
        src={freenlance}
        alt="person-freelance"
        className="img-question-seo"
      />
    </WrapperQuestion>
  )
}

export default Question
