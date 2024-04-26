import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import Container from 'ui/Container/Container'

export const SubscribeWrapper = styled(Container)`
  background-color: ${colors.secondary.main};
  color: ${colors.white.main};
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 1rem 1rem 0 1rem;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    padding: 0 2rem 0 3rem;
  }

  .subscribe-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .subscribe-title {
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }

    .subscribe-description {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.6875rem;
    }
  }

  .subscribe-form {
    background-color: ${colors.white.main};
    border-radius: 0.5rem;
    padding: 0.11rem 0.25rem;
    display: flex;
    align-items: center;

    .subscribe-input {
      background: none;
      outline: none;
      border: none;
      flex-grow: 1;
      padding: 0.85rem 1rem;
    }

    .subscribe-input .input {
      margin-top: 0;
    }

    .subscribe-button {
      border-radius: 0.5rem;
      padding: 1rem 1.5rem;
    }
  }

  .subscribe-img {
    height: auto;
    width: fit-content;
  }
`
