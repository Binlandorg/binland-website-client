import { BsCheck } from 'react-icons/bs'

import Container from 'ui/Container/Container'
import {
  ContainerProjectFinal,
  ContentDescription,
  ContentTitle,
  ProyectDeliverables,
  QuestionWrapperService,
  SectionProjectDeliverables,
  WrapperProjectDeliverables,
} from './Deliverables.style'
import { IDeliverable } from 'types/components/service'

const Deliverables: React.FC<IDeliverable> = ({
  question,
  description,
  items,
}) => {
  return (
    <ContainerProjectFinal>
      <Container size="xl">
        <SectionProjectDeliverables type="margin" size="sm">
          <QuestionWrapperService>
            <ContentTitle>{question}</ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </QuestionWrapperService>
          <WrapperProjectDeliverables>
            {items.map((element, index) => (
              <ProyectDeliverables key={index}>
                <BsCheck className="icon-check" size={31} strokeWidth="1px" />
                <p>{element.name} </p>
              </ProyectDeliverables>
            ))}
          </WrapperProjectDeliverables>
        </SectionProjectDeliverables>
      </Container>
    </ContainerProjectFinal>
  )
}

export default Deliverables
