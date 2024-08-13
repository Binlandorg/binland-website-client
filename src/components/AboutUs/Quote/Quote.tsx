import { QuoteWrapper, StyledQuote } from './Quote.styles'
import Container from 'ui/Container/Container'
import Section from 'ui/Section/Section'
import OpenQuote from 'ui/Icons/OpenQuote'
import CloseQuote from 'ui/Icons/CloseQuote'
import Display from 'ui/Display/Display'

interface QuoteProps {
  text: string
}

export const Quote: React.FC<QuoteProps> = ({ text }) => {
  return (
    <Section size="sm" type="margin">
      <Container size="xl" isfullwidth>
        <StyledQuote>
          <QuoteWrapper>
            <div>
              <span className="icon-open-quote">
                <OpenQuote />
              </span>
            </div>
            <div>
              <Display size="sm" className="quote">
                {text}
              </Display>
            </div>
            <div>
              <span className="icon-close-quote">
                <CloseQuote />
              </span>
            </div>
          </QuoteWrapper>
        </StyledQuote>
      </Container>
    </Section>
  )
}

export default Quote
