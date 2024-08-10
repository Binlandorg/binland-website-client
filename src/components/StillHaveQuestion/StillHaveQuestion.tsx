import { TbSend } from 'react-icons/tb'

import useIntlMessages from 'hooks/useIntlMessages'
import {
  ContainerHaveQuestion,
  HaveQuestion,
  SupportChat,
} from './StillHaveQuestion.styles'
import ButtonLink from 'ui/ButtonLink/ButtonLink'

const StillHaveQuestion: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <ContainerHaveQuestion>
      <HaveQuestion>
        <SupportChat>
          {intl('frequently.asked.questions.still.have.questions.description')}
        </SupportChat>
      </HaveQuestion>
      <ButtonLink
        type="primary"
        to="/#contact-us"
        className="faq-button-contact-us"
      >
        Contactanos <TbSend />
      </ButtonLink>
    </ContainerHaveQuestion>
  )
}

export default StillHaveQuestion
