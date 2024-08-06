import { IoClose } from 'react-icons/io5'

import { TagStyled } from './Tag.styles'

interface TagProps {
  name: string
  onRemove: () => void
}

const Tag: React.FC<TagProps> = ({ name, onRemove }) => {
  return (
    <TagStyled>
      <span>{name}</span>
      <div className="icon-close-wrapper">
        <IoClose className="icon-close" size={20} onClick={onRemove} />
      </div>
    </TagStyled>
  )
}

export default Tag
