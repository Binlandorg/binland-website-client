import useIntlMessages from 'hooks/useIntlMessages'
import {
  ContentWrapper,
  MacroService,
  MacroServiceContent,
} from './SingleMobileService.styles'

interface ITabProperties {
  key: string
  label: string
  children: React.ReactNode
}

const SingleMobileService: React.FC<ITabProperties> = ({ key, label, children }) => {
  const intl = useIntlMessages()
  return (
    <ContentWrapper key={key}>
      <MacroService>{intl(label)}</MacroService>
      <MacroServiceContent>{children}</MacroServiceContent>
    </ContentWrapper>
  )
}

export default SingleMobileService
