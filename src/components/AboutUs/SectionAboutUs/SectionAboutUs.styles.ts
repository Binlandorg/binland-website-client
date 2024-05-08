import styled from 'styled-components'

import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'

interface IProps {
  $position: 'left' | 'right'
}

interface ILine extends IProps {
  $sectionWidth: number
  $scrollbarWidth: number
}

export const SectionTitle = styled.div<IProps>`
  width: 100%;
  text-transform: uppercase;
  color: ${colors.secondary.main};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  & h2 {
    position: relative;
    order: ${({ $position }) => ($position === 'left' ? '0' : '1')};
  }
`

export const TitleLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
`
export const Line = styled.div<ILine>`
  width: 100%;
  height: 0.125rem;
  background-color: ${colors.secondary.main};
  position: relative;
  
  &::after {
    --section-width: ${({$sectionWidth}) => `${$sectionWidth}px`};
    --scrollbar-width: ${({$scrollbarWidth}) => `${$scrollbarWidth}px`};
    --fix-100vw: calc(100vw - var(--scrollbar-width));
    --line-width: calc((var(--fix-100vw) - var(--section-width)) / 2);
    content: '';
    position: absolute;
    width: var(--line-width);
    height: 0.125rem;
    border-radius: 1rem;
    background-color: ${colors.secondary.main};
    ${({ $position }) => `${$position}: 100%;`}
  }  
`
export const SectionDescription = styled(Container)`
  padding: 0;
  justify-content: flex-start;
  margin: 0;
  align-items: flex-start;
  width: 100%;
`
export const DescriptionSubTitle = styled.div`
  & h4{
    text-transform: uppercase;
    color: ${ colors.primary.main }
  }
`
export const DescriptionTitle = styled.div`
  & h3{
    text-transform: uppercase;
    color: ${ colors.secondary.main }
  }
`
export const SectionContent = styled.div``
export const TitleDot = styled.span`
  color: ${colors.primary.main};
`
