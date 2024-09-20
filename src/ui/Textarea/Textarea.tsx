import { useEffect, useRef } from "react"

import { MdError } from "react-icons/md"
import type { IPropsTextarea } from "types/ui/Textarea"
import {
	ErrorTextarea,
	TextareaLabel,
	TextareaWrapper,
} from "./Textarea.styles"

const Textarea: React.FC<IPropsTextarea> = ({
	label,
	name,
	placeholder = "",
	id,
	value,
	onChange,
	onBlur,
	error = null,
}) => {
	const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
	const handleWrapperClick = () => {
		if (textAreaRef.current) {
			textAreaRef.current.focus()
		}
	}

	const resizeTextArea = () => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = "auto"
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
		}
	}

	useEffect(resizeTextArea, [])

	return (
		<div>
			<TextareaWrapper onClick={handleWrapperClick} $isError={Boolean(error)}>
				<TextareaLabel>
					<textarea
						ref={textAreaRef}
						id={id || name}
						name={name}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						placeholder={placeholder}
					/>
					<span>{label}</span>
				</TextareaLabel>
			</TextareaWrapper>
			{error && (
				<ErrorTextarea>
					<MdError />
					{error}
				</ErrorTextarea>
			)}
		</div>
	)
}

export default Textarea
