import { MdOutlineMail } from 'react-icons/md'
import { IoIosPhonePortrait } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import { PopupButton } from 'react-calendly'

import {
  ContactUsInformationIcons,
  ContentButton,
  ContentQuestions,
  IconContactUs
} from './ContactUsContent.styles'
import H4 from 'ui/Titles/H4'
import useIntlMessages from 'hooks/useIntlMessages'
import Paragraph from 'ui/Paragraph/Paragraph'
import { colors } from 'styles/colors'
import { COMPANY_CONTACT_EMAIL, COMPANY_PHONE_NUMBER, PERU_PHONE_CODE } from 'context/constants/constans'
import { phoneNumberFormatter } from 'utils/formatters/formatters'

interface IContactInformation {
  id: number
  icon: React.ReactNode
  info: string
}

const ICON_SIZE = 20

const ContactInformation: IContactInformation[] = [
  {
    id: 1,
    icon: <MdOutlineMail size={ICON_SIZE} />,
    info: COMPANY_CONTACT_EMAIL,
  },
  {
    id: 2,
    icon: <IoIosPhonePortrait size={ICON_SIZE} />,
    info: phoneNumberFormatter(PERU_PHONE_CODE, COMPANY_PHONE_NUMBER),
  },
  { id: 3, icon: <CiLocationOn size={ICON_SIZE} />, info: 'Arequipa, Perú' },
]

const ContactUsContent: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <>
      <ContentQuestions>
        <H4 color={colors.primary.main} $weight="medium">
          {intl('contact.us.information.title')}
        </H4>
        <Paragraph $weight="regular" $style="normal">
          {intl('contact.us.information.description')}
        </Paragraph>
      </ContentQuestions>
      <ContactUsInformationIcons>
        {ContactInformation.map((element) => (
          <IconContactUs key={element.id}>
            {element.icon}
            <Paragraph $weight="regular" $style="normal">
              {element.info}
            </Paragraph>
          </IconContactUs>
        ))}
      </ContactUsInformationIcons>
      <ContentButton>
        <Paragraph $weight="regular" $style="normal">
          {intl('contact.us.information.schedule.an.appointment.title')}
        </Paragraph>
        <PopupButton
          url="https://calendly.com/binland-contacto"
          rootElement={document.getElementById('root')!}
          text={intl('contact.us.information.schedule.an.appointment.button')}
          className="popup-button-custom"
        />
      </ContentButton>
    </>
  )
}

export default ContactUsContent
