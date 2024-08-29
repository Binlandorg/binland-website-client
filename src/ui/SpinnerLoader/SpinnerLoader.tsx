import styled, { keyframes } from 'styled-components'

import { colors } from 'styles/colors'

const spin = keyframes`
  from {  
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const Loader = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: linear-gradient(
    0deg,
    ${colors.primary.main} 0%,
    ${colors.primary.hover[300]},
    ${colors.body} 100%
  );
  animation: ${spin} 1s linear infinite;
`

const InnerCircle = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${colors.body};
  border-radius: 50%;
`

function SpinnerLoader() {
  return (
    <LoaderContainer>
      <Loader>
        <InnerCircle />
      </Loader>
    </LoaderContainer>
  )
}

export default SpinnerLoader
