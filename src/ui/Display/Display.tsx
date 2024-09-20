import type { IDisplayProps } from "types/ui/Display"
import { StyledDisplay } from "./Display.styles"

const Display: React.FC<IDisplayProps> = ({
	size,
	fontStyle,
	children,
	className,
}) => {
	return (
		<StyledDisplay size={size} fontStyle={fontStyle} className={className}>
			{children}
		</StyledDisplay>
	)
}

export default Display
