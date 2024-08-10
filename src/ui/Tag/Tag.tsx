import { IoClose } from 'react-icons/io5'

import { TagStyled } from './Tag.styles'

interface TagProps {
  name: string
  id: string
}

const Tag: React.FC<TagProps> = ({ name, id }) => {
  return (
    <TagStyled>
      <span>{name}</span>
      <div className="icon-close-wrapper" data-id={id}>
        <IoClose className="icon-close" size={20} />
      </div>
    </TagStyled>
  )
}

export default Tag
