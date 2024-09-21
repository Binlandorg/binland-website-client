import type { IContainer } from "types/ui/Container"
import { StyledContainer } from "./Container.styles"

const Container: React.FC<IContainer> = ({
	size,
	id,
	children,
	className,
	isfullwidth,
}) => {
	return (
		<StyledContainer
			id={id}
			size={size}
			className={className}
			$isfullwidth={isfullwidth}
		>
			{children}
		</StyledContainer>
	)
}

export default Container
