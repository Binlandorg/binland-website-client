import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'

export const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  grid-auto-rows: 5.625rem;
  grid-gap: 1rem;
  padding: 1.25rem;
  object-fit: cover;
  margin-bottom: 4rem;

  .fachada-item {
    grid-column-start: span 2;
  }

  .street-item {
    grid-column-start: span 1;
  }

  .team2-item {
    grid-column-start: span 2;
    grid-row-start: span 2;
  }

  .realidad-virtual-item {
    grid-column-start: span 1;
  }

  .andrea-item {
    grid-column-start: span 1;
  }

  .andrea2-item {
    grid-column-start: span 1;
  }

  .programing-item {
    grid-column-start: span 1;
  }

  .offices-item {
    grid-column-start: span 1;
  }

  .team-item {
    grid-column-start: span 3;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 12.5rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);

    .fachada-item {
      grid-column-start: span 3;
    }

    .realidad-virtual-item {
      grid-column-start: span 2;
    }

    .team-item {
      grid-column-start: span 2;
    }
  }
`
export const CollageItem = styled.img`
  display: block;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`