import React, { useState } from 'react'
import { IoEllipse } from 'react-icons/io5'
import { motion } from 'framer-motion'

import {
  ContainerProcess,
  ContainerUlTabs,
  TabsIcon,
  WrapperInfo,
  WrapperTabs,
  WrapperTitleProcess,
} from './DevelopmentProcess.style'
import Section from 'ui/Section/Section'
import { IDevelopmentProcess } from 'types/components/service'
import {
  getTransitionDimension,
  getTransitionDuration,
} from 'utils/components/developmentProcess'

const DevelopmentProcess: React.FC<IDevelopmentProcess> = ({
  question,
  description,
  steps,
}) => {
  const [activeTab, setActiveTab] = useState(steps[0].id)

  return (
    <Section size="lg" type="padding">
      <ContainerProcess size="xl">
        <WrapperTitleProcess>
          <h2 className="title-process">{question}</h2>
          <h5 className="description-process">{description}</h5>
        </WrapperTitleProcess>
        <WrapperTabs>
          <ContainerUlTabs $dimension={getTransitionDimension(steps.length)}>
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={'button-tabs'}
                >
                  {activeTab === step.id && (
                    <motion.span
                      layoutId="bubble"
                      className="bubble"
                      transition={{
                        type: 'spring',
                        bounce: 0.15,
                        duration: getTransitionDuration(steps.length),
                      }}
                    >
                      <p className="bubble-two"></p>
                    </motion.span>
                  )}
                  <TabsIcon
                    className={activeTab === step.id ? 'selected' : 'desactive'}
                  >
                    <IoEllipse size={16} />
                  </TabsIcon>
                </div>
                {index !== steps.length - 1 && <div className="line" />}
              </React.Fragment>
            ))}
          </ContainerUlTabs>
          <div className="tab-content">
            {steps.map((step, index) => (
              <WrapperInfo
                key={index}
                style={{ display: activeTab === step.id ? '' : 'none' }}
              >
                <h5 className="wrapper-info-title">{step.title}</h5>
                <p className="wrapper-info-description">{step.description}</p>
              </WrapperInfo>
            ))}
          </div>
        </WrapperTabs>
      </ContainerProcess>
    </Section>
  )
}
export default DevelopmentProcess
