import useElementSize from '@custom-react-hooks/use-element-size'

import H2 from 'ui/Titles/H2'
import H4 from 'ui/Titles/H4'
import H3 from 'ui/Titles/H3'
import { ITitle } from 'types/components/aboutus'
import {
  DescriptionSubTitle,
  DescriptionTitle,
  Line,
  SectionDescription,
  SectionTitle,
  TitleDot,
  TitleLine,
} from './SectionAboutUs.styles'
import useScrollbarWidth from 'hooks/useScrollbarWidth'
import Section from 'ui/Section/Section'
import Container from 'ui/Container/Container';

const SectionAboutUs : React.FC<ITitle> = ({title, titlePosition, description, children} : ITitle) => {
  const [setRef, size] = useElementSize()
  const scrollbarWidth = useScrollbarWidth()

  return (
    <Section size="sm" type="margin">
      <Container size="xl" isfullwidth>
        <SectionTitle $position={titlePosition} ref={setRef}>
          <H2>{title}<TitleDot>.</TitleDot></H2>
          <TitleLine>
            <Line $position={titlePosition} $sectionWidth={size.width} $scrollbarWidth={scrollbarWidth}></Line>
          </TitleLine>
        </SectionTitle>
        {
          description ? (
            <SectionDescription size="xl">
              <DescriptionSubTitle>
                <H4 $weight="medium">{description.title}</H4>
              </DescriptionSubTitle>
              <DescriptionTitle>
                <H3 $weight="semibold">{description.subTitle}<TitleDot>.</TitleDot></H3>
              </DescriptionTitle>
            </SectionDescription>
          ) : (<></>)
        }
        { children }
      </Container>
    </Section>
  )
}

export default SectionAboutUs