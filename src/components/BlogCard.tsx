import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/colors'

const CardWrapper = styled.div`
  background-color: ${colors.white.main};
`

const ImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

const CardTest: React.FC = () => {
  return (
    <CardWrapper>
      <ImgBox>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <div>hola</div>
        <button>Share</button>
      </ImgBox>
    </CardWrapper>
  )
}

export default CardTest
