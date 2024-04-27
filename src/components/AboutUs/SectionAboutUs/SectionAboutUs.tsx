import useElementSize from '@custom-react-hooks/use-element-size'

import H2 from 'ui/Titles/H2'
import H4 from 'ui/Titles/H4'
import H3 from 'ui/Titles/H3'
import { ITitle } from 'types/components/aboutus'
import {
  DescriptionSubTitle,
  DescriptionTitle,
  Line,
  SectionContainer,
  SectionDescription,
  SectionTitle,
  StyledSectionAboutUs,
  TitleDot,
  TitleLine,
} from './SectionAboutUs.styles'

const SectionAboutUs : React.FC<ITitle> = ({title, titlePosition, description, children} : ITitle) => {
  const [setRef, size] = useElementSize()

  return (
    <StyledSectionAboutUs size="lg" type="margin">
      <SectionContainer size="xl">
        <SectionTitle $position={titlePosition} ref={setRef}>
          <H2>{title}<TitleDot>.</TitleDot></H2>
          <TitleLine>
            <Line $position={titlePosition} $width={size.width}></Line>
          </TitleLine>
        </SectionTitle>
        {
          description ? (
            <SectionDescription size="xl">
              <DescriptionSubTitle>
                <H4 $weight="medium">{description.title}</H4>
              </DescriptionSubTitle>
              <DescriptionTitle>
                <H3 $weight="semibold">{description.subTitle}</H3>
              </DescriptionTitle>
            </SectionDescription>
          ) : (<></>)
        }
        { children }
      </SectionContainer>
    </StyledSectionAboutUs>
  )
}

export default SectionAboutUs