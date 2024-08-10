import { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { IoIosRemove } from 'react-icons/io'

import {
  AnswerFAQ,
  Question,
  QuestionWrapper,
  Response,
} from './FaqCard.styles'

interface IFaqCardProps {
  question: string
  answer: string
}

const FaqCard: React.FC<IFaqCardProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <QuestionWrapper>
      <Question
        onClick={() => setShowAnswer(!showAnswer)}
        className={showAnswer ? 'selected' : ''}
      >
        <span className="faq-question" >{question}</span>
        <div className="expand-collapse-toggle">
          {!showAnswer && <IoMdAdd size={22} />}
          {showAnswer && <IoIosRemove size={22} />}
        </div>
      </Question>
      {showAnswer && (
        <AnswerFAQ>
          <Response>{answer}</Response>
        </AnswerFAQ>
      )}
    </QuestionWrapper>
  )
}

export default FaqCard
