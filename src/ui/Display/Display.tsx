import { IDisplayProps } from 'types/ui/Display'
import { StyledDisplay } from './Display.styles'

const Display: React.FC<IDisplayProps> = ({ size, fontStyle, children }) => {
  return (
    <StyledDisplay size={size} fontStyle={fontStyle}>
      {children}
    </StyledDisplay>
  )
}

export default Display
