import { useEffect, useMemo, useRef, useState } from "react"
import ReactDOM from "react-dom"
import { HiChevronDown } from "react-icons/hi"
import { MdError } from "react-icons/md"

import { ErrorMessage, Label, Option } from "./Select.styles"
import { Options, SelectWrapper } from "./Select.styles"

type OptionType = {
	label: React.ReactNode
	value: string | number
}

type Props = {
	options?: OptionType[]
	label?: string
	width?: number
	error?: string
	name?: string
	value?: string
	onChange?: (value: string) => void
	onBlur?: () => void
}

const Select: React.FC<Props> = ({
	options,
	label = "Select an option",
	width,
	error,
	onChange,
	value,
	onBlur,
}) => {
	const [open, setOpen] = useState(false)
	const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 })
	const selectRef = useRef<HTMLDivElement>(null)

	const selectedOption = useMemo(
		() => options?.find((opt) => opt.value === value),
		[options, value],
	)
	const [option, setOption] = useState<OptionType | null>(selectedOption || null)

	useEffect(() => {
		if (!open || !selectRef.current) return

		const rect = selectRef.current.getBoundingClientRect()
		const newCoords = {
			top: rect.bottom + window.scrollY,
			left: rect.left + window.scrollX,
			width: rect.width,
		}

		setCoords((prev) => {
			if (JSON.stringify(prev) !== JSON.stringify(newCoords)) {
				return newCoords
			}
			return prev
		})
	}, [open])

	const handleMouseEnter = () => {
		setOpen(true)
	}

	const handleMouseLeave = () => {
		setOpen(false)
		onBlur?.()
	}

	const handleChange = (option: OptionType) => {
		setOption(option)
		onChange?.(option.value.toString())
	}

	return (
		<>
			<SelectWrapper
				onClick={() => setOpen(!open)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				$width={width || coords.width}
				$open={open}
			>
				<Label
					ref={selectRef}
					$width={width || coords.width}
					$open={open}
					$isError={Boolean(error)}
					tabIndex={0}
				>
					<span className="content">
						<span className="value">{option?.label || ""}</span>
						<span className={`label ${option ? "to-up" : "to-down"}`}>{label}</span>
					</span>
					<HiChevronDown
						size={24}
						className={`icon ${open ? "to-up" : "to-down"}`}
					/>
					{open &&
						ReactDOM.createPortal(
							<Options
								className="options"
								$width={width || coords.width}
								$open={open}
								$isError={Boolean(error)}
								style={{
									top: coords.top,
									left: coords.left,
									position: "absolute",
								}}
							>
								{options?.map((opt) => (
									<Option
										key={opt.value}
										onClick={() => handleChange(opt)}
										className={opt.value === option?.value ? "selected" : ""}
									>
										{opt.label}
									</Option>
								))}
							</Options>,
							document.body,
						)}
				</Label>
				{error && (
					<ErrorMessage>
						<MdError />
						{error}
					</ErrorMessage>
				)}
			</SelectWrapper>
		</>
	)
}

export default Select
