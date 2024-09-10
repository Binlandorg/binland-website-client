import { PropsWithChildren } from 'react'

import { ContentWrapper } from './ContentLayout.styles'

const ContentLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  )
}

export default ContentLayout
