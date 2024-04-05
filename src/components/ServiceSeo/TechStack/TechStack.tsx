import Container from 'ui/Container/Container'
import {
  SectionTechnologies,
  Tech,
  TechnologiesDescription,
  TechnologiesTitle,
  WrapperTechnologies,
  WrapperTechnologiesTitle,
} from './TechStack.style'
import { ITechStack } from 'types/components/service'

const TechStack: React.FC<ITechStack> = ({ title, description, image }) => {
  return (
    <Container size="lg">
      <SectionTechnologies type="margin" size="lg">
        <WrapperTechnologiesTitle>
          <TechnologiesTitle>{title}</TechnologiesTitle>
          <TechnologiesDescription>{description}</TechnologiesDescription>
        </WrapperTechnologiesTitle>
        <WrapperTechnologies>
          <Tech>
            <img src={image} />
          </Tech>
        </WrapperTechnologies>
      </SectionTechnologies>
    </Container>
  )
}

export default TechStack
