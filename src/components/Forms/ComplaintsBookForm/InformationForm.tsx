import type { FormikProps } from "formik"
import { CgInfo } from "react-icons/cg"

import RadioGroup from "components/RadioGroup/RadioGroup"
import useIntlMessages from "hooks/useIntlMessages"
import Paragraph from "ui/Paragraph/Paragraph"
import H5 from "ui/Titles/H5"
import { ContactInformation } from "./ComplaintsBookForm.styles"
import { InformationDetails } from "./ComplaintsBookForm.styles"
import type { InitialValuesType } from "./ComplaintsBookForm.types"

type Props = {
	formik: FormikProps<InitialValuesType>
}

type OptionType = {
	label: React.ReactNode
	className?: string
	value: InitialValuesType["meansOfConfirmation"]
}

const InformationForm: React.FC<Props> = ({ formik }) => {
	const intl = useIntlMessages()

	const options: OptionType[] = [
		{
			label: intl("complaints.book.form.select.email"),
			value: "email",
			className: "info-email",
		},
		{
			label: intl("complaints.book.form.select.address"),
			value: "address",
			className: "info-address",
		},
	]

	return (
		<>
			<InformationDetails>
				<CgInfo className="icon-info" />
				<Paragraph>{intl("complaints.book.form.info.description")}</Paragraph>
			</InformationDetails>
			<ContactInformation>
				<H5 $weight="medium">
					{intl("complaints.book.form.fieldset.contact.info")}
				</H5>
				<Paragraph className="info-description">
					{intl("complaints.book.form.question.method.response")}
				</Paragraph>
				<div className="inputs">
					<RadioGroup
						className="radio-group"
						defaultValue="email"
						name="meansOfConfirmation"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						options={options}
					/>
				</div>
			</ContactInformation>
		</>
	)
}

export default InformationForm
