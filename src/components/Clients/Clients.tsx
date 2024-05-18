import useIntlMessages from 'hooks/useIntlMessages'
import Brandings from './Brandings'
import {
  ClientsSection,
  ClientsSectionWrapper,
  ClientsSectionContent,
  TitleAndButtonSection,
} from './Clients.styles'
import H2 from 'ui/Titles/H2'
import Container from 'ui/Container/Container'

const Clients: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <ClientsSection id='clients' size="lg" type="margin">
      <Container size="xl" isfullwidth>
        <ClientsSectionWrapper>
          <ClientsSectionContent>
            <TitleAndButtonSection>
              <H2>
                {intl('home.clients.section.title')}
                <span className="span-point">.</span>
              </H2>
            </TitleAndButtonSection>
            <Brandings />
          </ClientsSectionContent>
        </ClientsSectionWrapper>
      </Container>
    </ClientsSection>
  )
}

export default Clients
