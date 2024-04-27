import styled from 'styled-components'

import { breakpoints } from 'shared/breakpoints'

interface ISize {
  width: number
  height: number
}
interface IContainerSize {
  size: ISize
}

export const CollageContainer = styled.div<IContainerSize>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 1280px;
  width: 100%;
  height: ${({ size }) => `${size.width}px`};
  grid-gap: 1rem;
  object-fit: cover;

  & > div {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;

    & > div {
      height: 100%;
    }
  }

  & > div:nth-child(1) {
    grid-column: 1/4;
    grid-row: 1/2;
  }
  & > div:nth-child(2) {
    grid-column: 4/5;
    grid-row: 1/2;
  }
  & > div:nth-child(3) {
    grid-column: 1/3;
    grid-row: 2/4;
  }
  & > div:nth-child(4) {
    grid-column: 3/5;
    grid-row: 2/3;
  }
  & > div:nth-child(5) {
    grid-column: 3/4;
    grid-row: 3/4;
  }
  & > div:nth-child(6) {
    grid-column: 4/5;
    grid-row: 3/4;
  }
  & > div:nth-child(7) {
    grid-column: 1/2;
    grid-row: 4/5;
  }
  & > div:nth-child(8) {
    grid-column: 2/3;
    grid-row: 4/5;
  }
  & > div:nth-child(9) {
    grid-column: 3/5;
    grid-row: 4/5;
  }

  & img {
    display: block;
    border-radius: 0.375rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media only screen and (min-width: ${breakpoints.xl}) {
      object-position: center;
    }
  }

  @media only screen and (max-width: ${breakpoints.sm}) {
    height: ${({ size }) => `${size.width * 1.7}px`};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.75rem;

    & > div {
      border-radius: 0.5rem;
    }

    & > div:nth-child(1) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    & > div:nth-child(2) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    & > div:nth-child(3) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    & > div:nth-child(4) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    & > div:nth-child(5) {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    & > div:nth-child(6) {
      grid-column: 2/3;
      grid-row: 3/4;
    }
    & > div:nth-child(7) {
      grid-column: 1/2;
      grid-row: 4/5;
    }
    & > div:nth-child(8) {
      grid-column: 2/3;
      grid-row: 4/5;
    }
    & > div:nth-child(9) {
      grid-column: 1/3;
      grid-row: 5/6;
    }
  }
`
