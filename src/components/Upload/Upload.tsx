import type { PropsWithChildren } from "react"
import { cloneElement, isValidElement, useRef, useState } from "react"
import { RiAttachment2 } from "react-icons/ri"

import Button from "ui/Button/Button"
import ButtonLink from "ui/ButtonLink/ButtonLink"
import Paragraph from "ui/Paragraph/Paragraph"
import cleanClass from "utils/cleanClass"
import { UploadFile, UploadFiles, UploadWrapper } from "./Upload.styles"

type Props = PropsWithChildren & {
	label?: string
	name?: string
	className?: string
	accept?: string
	multiple?: boolean
	onFileChange: (files: FileList | null) => void
}

const Upload: React.FC<Props> = ({
	label = "Upload file",
	name,
	className,
	children,
	accept,
	multiple = false,
	onFileChange,
}) => {
	const [files, setFiles] = useState<FileList | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const isButton =
		isValidElement(children) &&
		(children.type === Button || children.type === ButtonLink)

	const handleClick = () => {
		inputRef.current?.click()
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			onFileChange(e.target.files)
			setFiles(e.target.files)
		}
	}

	return (
		<UploadWrapper className={cleanClass("binland-upload", className)}>
			<input
				type="file"
				accept={accept}
				multiple={multiple}
				onChange={handleChange}
				style={{ display: "none" }}
				name={name}
				ref={inputRef}
			/>
			{isButton &&
				cloneElement(children as React.ReactElement, {
					onClick: handleClick,
				})}
			{!isButton && (
				<Button $variant="secondary" $style="outline" onClick={handleClick}>
					{label}
					<RiAttachment2 className="icon" />
				</Button>
			)}

			{files && (
				<UploadFiles>
					{Array.from(files).map((file) => (
						<UploadFile key={file.name}>
							<Paragraph $weight="regular">{file.name}</Paragraph>
						</UploadFile>
					))}
				</UploadFiles>
			)}
		</UploadWrapper>
	)
}

export default Upload
