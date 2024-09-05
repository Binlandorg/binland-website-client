import { useEffect, useState } from 'react'

import {
  ContentWrapper,
  HorizontalTabsWrapper,
  SingleTab,
  TabsWrapper,
} from './HorizontalTabs.styles'
import useIntlMessages from 'hooks/useIntlMessages'

interface ITabProperties {
  key: string
  label: string
  children: React.ReactNode
}

interface ITabs {
  items: Array<ITabProperties>
}

const HorizontalTabs: React.FC<ITabs> = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<string>(
    () => items[0].key
  )
  const [currentContent, setCurrentContent] = useState<React.ReactNode>()

  const intl = useIntlMessages()

  const handleToggle = (index: string) => {
    setCurrentItemIndex(index)
  }

  useEffect(() => {
    setCurrentContent(
      items.filter((item) => item.key === currentItemIndex)[0].children
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItemIndex, currentContent])

  return (
    <HorizontalTabsWrapper>
      <TabsWrapper>
        {items.map((item) => (
          <SingleTab
            key={item.key}
            onClick={() => handleToggle(item.key)}
            className={currentItemIndex == item.key ? 'selected' : ''}
          >
            {intl(item.label)}
          </SingleTab>
        ))}
      </TabsWrapper>
      <ContentWrapper>{currentContent}</ContentWrapper>
    </HorizontalTabsWrapper>
  )
}

export default HorizontalTabs
