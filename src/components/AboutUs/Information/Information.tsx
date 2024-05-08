import Section from 'ui/Section/Section'
import Container from 'ui/Container/Container'
import {
  StyledInformation,
  InformationDescription,
  InformationDetails,
} from './Information.styles'
import H5 from 'ui/Titles/H5'
import H4 from 'ui/Titles/H4'
import H3 from 'ui/Titles/H3'
import Paragraph from 'ui/Paragraph/Paragraph'
import useIntlMessages from 'hooks/useIntlMessages'
import Reveal from 'components/Reveal/Reveal'
import Display from 'ui/Display/Display'
import { detailsData } from './Information.data'
import { IDetailData } from 'types/components/aboutus'

const Information: React.FC = () => {
  const intl = useIntlMessages()

  return (
    <Section size="sm" type="margin">
      <Container size="xl" isfullwidth>
        <StyledInformation>
          <InformationDescription>
            <div>
              <H4 $weight="regular">
                {intl('about.us.binland.information.sub.title')}
              </H4>
              <H3 $weight="semibold">
                {intl('about.us.binland.information.title')}
                <span className="dot">.</span>
              </H3>
            </div>
            <Paragraph $weight="regular" $style="normal">
              {intl('about.us.binland.information.description')}
            </Paragraph>
          </InformationDescription>
          <InformationDetails>
            {
              detailsData.map((detail) => {
                const { id, amount, name }: IDetailData = detail
                return (
                  <div key={id}>
                    <Reveal>
                      <Display size="md">{amount}</Display>
                      <H5 $weight="regular">{intl(name)}</H5>
                    </Reveal>
                  </div>
                )
              })
            }
            <div className="detail-image"></div>
          </InformationDetails>
        </StyledInformation>
      </Container>
    </Section>
  )
}

export default Information
