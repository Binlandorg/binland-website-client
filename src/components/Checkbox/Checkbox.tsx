import type { PropsWithChildren } from "react"

import cleanClass from "utils/cleanClass"
import { Label, Target, Wrapper } from "./Checkbox.styles"

type Props = PropsWithChildren & {
	className?: string
	checked?: boolean
	name?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<Props> = ({
	className,
	checked,
	children,
	onChange,
	onBlur,
	name,
}) => {
	const classNames = cleanClass(className, "binland-checkbox")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		onBlur?.(e)
	}

	return (
		<Wrapper className={classNames}>
			<Target>
				<input
					type="checkbox"
					checked={checked}
					onChange={handleChange}
					onBlur={handleBlur}
					name={name}
				/>
				<span className="checkmark" />
			</Target>
			<Label>{children}</Label>
		</Wrapper>
	)
}

export default Checkbox
