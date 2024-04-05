import { IServiceFeature } from 'types/components/service'
import {
  WrapperDescription,
  WrapperService,
  WrapperTitle,
} from './Features.styles'

const Features: React.FC<{ features: Array<IServiceFeature> }> = ({
  features,
}) => {
  return (
    <WrapperService size="lg" type="margin">
      <WrapperTitle>
        <h2 className="service-title-question">¿Que incluye?</h2>
        <p className="service-title-response">
          Mal voz cigarrillo van triunfante sacamuelas. Mi el mascaba ni caridad
          ya ceguera.{' '}
        </p>
      </WrapperTitle>
      <WrapperDescription>
        {features?.map((element, index) => (
          <div key={index} className="wrapper-description-info">
            <div className="wrapper-description-title">
              <span className="wrapper-title-icon">{element.icon}</span>
              <h3 className="wrapper-title">{element.title}</h3>
            </div>
            <p className="content-description-info-p">{element.description}</p>
          </div>
        ))}
      </WrapperDescription>
    </WrapperService>
  )
}

export default Features
