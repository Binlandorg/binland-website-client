import { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import { HiChevronDown } from "react-icons/hi"
import { MdError } from "react-icons/md"

import cleanClass from "utils/cleanClass"
import { ErrorMessage, Input, Label, Option } from "./Select.styles"
import { SelectContainer, SelectLabel, Value } from "./Select.styles"
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
	error,
	onChange,
	value,
	onBlur,
}) => {
	const [open, setOpen] = useState(false)
	const [optionsStyle, setOptionsStyle] = useState<React.CSSProperties>({})
	const containerRef = useRef<HTMLDivElement>(null)
	const optionRef = useRef<HTMLDivElement>(null)
	const [option, setOption] = useState<OptionType | null>(null)

	useEffect(() => {
		const selectedOption = options?.find((opt) => opt.value === value) || null

		setOption((prev) => {
			if (prev?.value !== selectedOption?.value) {
				return selectedOption
			}
			return prev
		})
	}, [value, options])

	useEffect(() => {
		const calcCss = () => {
			if (open && containerRef.current && optionRef.current) {
				const rect = containerRef.current.getBoundingClientRect()
				const optionRect = optionRef.current.getBoundingClientRect()
				const size = options?.length || 0
				const limit = 3
				const quantity = size < limit ? size : limit

				const newStyle: React.CSSProperties = {
					position: "absolute",
					top: rect.bottom + window.scrollY,
					left: rect.left + window.scrollX,
					width: rect.width,
					height: optionRect.height * quantity,
				}

				setOptionsStyle((prev) => {
					if (JSON.stringify(prev) !== JSON.stringify(newStyle)) {
						return newStyle
					}
					return prev
				})
			}
		}

		calcCss()

		window.addEventListener("resize", calcCss)

		return () => {
			window.removeEventListener("resize", calcCss)
		}
	}, [open, options])

	const handleChange = (option: OptionType) => {
		setOption(option)
		setOpen(false)
		onChange?.(option.value.toString())
	}

	const handleBlur = () => {
		const time = setTimeout(() => {
			onBlur?.()
			setOpen(false)
		}, 100)

		return () => clearTimeout(time)
	}

	return (
		<>
			<SelectWrapper tabIndex={0} onBlur={handleBlur}>
				<SelectContainer
					ref={containerRef}
					$open={open}
					$isError={Boolean(error)}
					className={cleanClass("select-container", open && "open")}
				>
					<SelectLabel onClick={() => setOpen(!open)}>
						<Input disabled tabIndex={-1} />
						<Value>{option?.label}</Value>
						<Label className={option || open ? "to-up" : "to-down"}>{label}</Label>
						<HiChevronDown
							size={24}
							className={`icon ${open ? "to-up" : "to-down"}`}
						/>
					</SelectLabel>
					{open &&
						ReactDOM.createPortal(
							<Options
								style={optionsStyle}
								$open={open}
								$isError={Boolean(error)}
								className={cleanClass(open && "open")}
							>
								{options?.map((opt) => (
									<Option
										ref={optionRef}
										key={opt.value}
										onClick={() => handleChange(opt)}
										className={cleanClass(opt.value === option?.value && "selected")}
									>
										{opt.label}
									</Option>
								))}
							</Options>,
							document.body,
						)}
				</SelectContainer>
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
