import useIntlMessages from 'hooks/useIntlMessages'
// import IconLeftQuote from './../../../assets/images/Quote/left-quotation-mark.svg'
// import IconRightQuote from './../../../assets/images/Quote/right-quotation-mark.svg'
import { StyledQuote } from './Quote.styles'

export const Quote = () => {
  const intl = useIntlMessages()

  return (
    <StyledQuote size="lg" type="padding">
      <div className="left-quotation-mark">
        {/* <IconLeftQuote/> */}
      </div>
      <p className="quote">{intl('about.us.quote.description')}</p>
      <div className="right-quotation-mark">
        {/* <IconRightQuote/> */}
      </div>
    </StyledQuote>
  )
}

export default Quote
