import styled from 'styled-components'

import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'
import Section from 'ui/Select/Select'

interface IProps {
  $position: 'left' | 'right'
}

interface ILine extends IProps {
  $width?: number
}

export const StyledSection = styled(Section)`
  overflow-x: hidden;
`

export const SectionContainer = styled(Container)`
  width: 100%;
  padding: 0;
  gap: 3rem;
`

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
    content: '';
    position: absolute;
    width: calc(100vw - ${({$width}) => `${$width}px`} + 1rem);
    height: 0.125rem;
    border-radius: 1rem;
    background-color: ${colors.secondary.main};
    ${({ $position }) => `${$position}: 100%;`}
  }  
`
export const SectionDescription = styled(Container)``
export const DescriptionSubTitle = styled.div``
export const DescriptionTitle = styled.div``
export const SectionContent = styled.div``
export const TitleDot = styled.span`
  color: ${colors.primary.main};
`
