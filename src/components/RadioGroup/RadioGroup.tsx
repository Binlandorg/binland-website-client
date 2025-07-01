import { useId } from "react"

import cleanClass from "utils/cleanClass"
import { RadioLabel, RadioTarget, RadioWrapper } from "./RadioGroup.styles"

type Props = {
	className?: string
	defaultValue: string
	name: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
	options: {
		label: React.ReactNode
		className?: string
		value: string
	}[]
}

const RadioGroup: React.FC<Props> = ({
	className,
	defaultValue,
	name,
	onChange,
	onBlur,
	options,
}) => {
	const id = useId()
	const classNames = cleanClass(className, "binland-radio-group")

	return (
		<div className={classNames}>
			{options.map((option) => (
				<RadioWrapper
					className={option.className}
					key={option.value}
					htmlFor={`${id}-${option.value}`}
				>
					<RadioTarget>
						<input
							id={`${id}-${option.value}`}
							type="radio"
							name={name}
							value={option.value}
							defaultChecked={option.value === defaultValue}
							onChange={onChange}
							onBlur={onBlur}
						/>
						<span className="radio" />
					</RadioTarget>
					<RadioLabel>{option.label}</RadioLabel>
				</RadioWrapper>
			))}
		</div>
	)
}

export default RadioGroup
