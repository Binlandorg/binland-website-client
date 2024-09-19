import useIntlMessages from 'hooks/useIntlMessages'
import { breakpoints } from 'shared/breakpoints'
import styled from 'styled-components'
import { colors } from 'styles/colors'
import H3 from 'ui/Titles/H3'

interface IMision {
  title: string
  description: string
  img: string
}

const CardWrapper = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: ${colors.secondary.normal[200]};
  /* min-width: 18.75rem; */
  max-width: 18.75rem;
  /* max-height: 409px; */

  & .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & h3 {
      text-align: center;
    }

    & .mision__description {
      text-align: center;
    }
  }

  & .mision__img {
    width: 100%;
    max-width: 214px;
    max-height: 189px;
    height: auto;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    flex: 1;
    max-height: fit-content;
  }
`

const MisionCard: React.FC<IMision> = (props) => {
  const intl = useIntlMessages()
  return (
    <CardWrapper>
      <div className="info">
        <H3 $weight="bold">{intl(props.title).toUpperCase()}</H3>
        <p className="mision__description">{intl(props.description)}</p>
      </div>
      <img className="mision__img" src={props.img} />
    </CardWrapper>
  )
}

export default MisionCard
