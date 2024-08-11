import { IoClose } from 'react-icons/io5'

import { TagStyled } from './Tag.styles'

interface TagProps {
  name: string
  id: string
}

const Tag: React.FC<TagProps> = ({ name, id }) => {
  return (
    <TagStyled data-id={id}>
      <span>{name}</span>
      <div className="icon-close-wrapper">
        <IoClose className="icon-close" size={20} />
      </div>
    </TagStyled>
  )
}

export default Tag
