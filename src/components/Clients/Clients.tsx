import { TbExternalLink } from 'react-icons/tb'

import useIntlMessages from 'hooks/useIntlMessages'
import ButtonLink from 'ui/ButtonLink/ButtonLink'
import Brandings from './Brandings'
import {
  SectionClients,
  ClientsSectionWrapper,
  ClientsSectionContent,
  TitleAndButtonSection,
} from './Clients.styles'
import H2 from 'ui/Titles/H2'
import Container from 'ui/Container/Container'

const Clients: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <SectionClients id='clients' size="lg" type="margin">
      <Container size="xl" isfullwidth>
        <ClientsSectionWrapper>
          <ClientsSectionContent>
            <TitleAndButtonSection>
              <H2>
                {intl('home.clients.section.title')}
                <span className="span-point">.</span>
              </H2>
              {/**Here we hide this button because the page of this path isn't ready */}
              <div style={{ display: 'none' }}>
                <ButtonLink type="secondary" to="/portafolio">
                  {intl('home.clients.section.button')}
                  <TbExternalLink size={25} />
                </ButtonLink>
              </div>
            </TitleAndButtonSection>
            <Brandings />
          </ClientsSectionContent>
        </ClientsSectionWrapper>
      </Container>
    </SectionClients>
  )
}

export default Clients
