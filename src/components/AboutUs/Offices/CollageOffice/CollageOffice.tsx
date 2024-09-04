import useElementSize from '@custom-react-hooks/use-element-size'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import collageData from './Collage.data'
import Reveal from 'components/Reveal/Reveal'
import { CollageContainer } from './CollageOffice.style'

const CollageOffice: React.FC = () => {
  const [setRef, size] = useElementSize()

  return (
    <CollageContainer ref={setRef} size={size}>
      {collageData?.map((image) => (
        <Reveal key={image.id} classname="framer-motion-item">
          <picture>
            <source srcSet={image.url} media="(min-width: 1025px)" />
            <source srcSet={image.urlMobile} media="(max-width: 1024px)" />
            <LazyLoadImage src="" alt={image.alt} threshold={200} />
          </picture>
        </Reveal>
      ))}
    </CollageContainer>
  )
}

export default CollageOffice
