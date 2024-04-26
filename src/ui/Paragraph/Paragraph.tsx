import { IParagraph } from "types/ui/Paragraph"
import { StyledParagraph } from "./Paragraph.style"

const Paragraph: React.FC<IParagraph> = (props) => {
  return <StyledParagraph {...props} />
}

export default Paragraph