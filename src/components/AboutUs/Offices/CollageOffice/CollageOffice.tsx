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
          <LazyLoadImage src={image.url} alt={image.alt} threshold={200} />
        </Reveal>
      ))}
    </CollageContainer>
  )
}

export default CollageOffice
