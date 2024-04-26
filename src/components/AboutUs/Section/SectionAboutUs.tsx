import { PropsWithChildren } from 'react'
import useElementSize from '@custom-react-hooks/use-element-size'

import { StyledSection } from 'ui/Section/section.styles'
import {
  DescriptionSubTitle,
  DescriptionTitle,
  Line,
  SectionContainer,
  SectionDescription,
  SectionTitle,
  TitleDot,
  TitleLine,
} from './SectionAboutUs.styles'
import H2 from 'ui/Titles/H2'
import H4 from 'ui/Titles/H4'
import H3 from 'ui/Titles/H3'

interface IDescription {
  subTitle: string
  title: string
}

interface IProps extends PropsWithChildren{
  title: string
  titlePosition: 'left' | 'right'
  description?: IDescription | undefined
}

export const Section = (props: IProps) => {
  const [setRef, size] = useElementSize()

  return (
    <StyledSection size="xl" type="margin">
      <SectionContainer size="xl">
        <SectionTitle $position={props.titlePosition} ref={setRef}>
          <H2>{props.title}<TitleDot>.</TitleDot></H2>
          <TitleLine><Line $position={props.titlePosition} $width={size.width}></Line></TitleLine>
        </SectionTitle>
        {
          props.description ? (
            <SectionDescription size="xl">
              <DescriptionSubTitle>
                <H4 $weight="medium">{props.description.title}</H4>
              </DescriptionSubTitle>
              <DescriptionTitle>
                <H3 $weight="semibold">{props.description.subTitle}</H3>
              </DescriptionTitle>
            </SectionDescription>
          ) : (<></>)
        }
        {props.children}
      </SectionContainer>
    </StyledSection>
  )
}
