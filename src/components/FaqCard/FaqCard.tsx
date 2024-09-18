import { useState } from 'react'
import { IoMdAdd, IoIosRemove } from 'react-icons/io'
import { AnimatePresence } from 'framer-motion'

import { FAQAnswer, Question, QuestionWrapper } from './FaqCard.styles'

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
        <span className="faq-question">{question}</span>
        <div className="expand-collapse-toggle">
          {!showAnswer && <IoMdAdd size={22} />}
          {showAnswer && <IoIosRemove size={22} />}
        </div>
      </Question>
      <AnimatePresence>
        {showAnswer && (
          <FAQAnswer
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: .5 }}
          >
            <p className="faq-answer">{answer}</p>
          </FAQAnswer>
        )}
      </AnimatePresence>
    </QuestionWrapper>
  )
}

export default FaqCard
