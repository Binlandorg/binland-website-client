import { useFormik } from "formik"
import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { FiSend } from "react-icons/fi"

import Steps from "components/Steps/Steps"
import useIntlMessages from "hooks/useIntlMessages"
import Button from "ui/Button/Button"
import { initialValues } from "./ComplaintsBookForm.data"
import { fieldsByGroup } from "./ComplaintsBookForm.data"
import { validationSchemas } from "./ComplaintsBookForm.schema"
import { ComplaintsBookFormWrapper, Footer } from "./ComplaintsBookForm.styles"
import type { InitialValuesType } from "./ComplaintsBookForm.types"
import ContactDataForm from "./ContactDataForm"
import DetailsForm from "./DetailsForm"
import InformationForm from "./InformationForm"

type Props = {
	onConfirm: Dispatch<SetStateAction<boolean>>
	onRegisterNumber: Dispatch<SetStateAction<string>>
}

const ComplaintsBookForm: React.FC<Props> = ({
	onConfirm,
	onRegisterNumber,
}) => {
	const [step, setStep] = useState<number>(1)
	const intl = useIntlMessages()

	const formik = useFormik({
		initialValues,
		validationSchema: validationSchemas[step - 1],
		onSubmit: () => {
			// TODO: Implement register number generation
			// TODO: These are just placeholders
			onConfirm(true)
			onRegisterNumber("123456")
		},
	})

	const items = [
		{
			title: "Contact Data",
			content: <ContactDataForm formik={formik} />,
		},
		{
			title: "Details",
			content: <DetailsForm formik={formik} />,
		},
		{
			title: "Information",
			content: <InformationForm formik={formik} />,
		},
	]

	const isFinalStep = step === items.length

	const handleCheck = async () => {
		const currentFields = fieldsByGroup[step - 1]
		const errors = await formik.validateForm()
		const touchedFields = currentFields.reduce(
			(acc, key) => {
				acc[key] = true
				return acc
			},
			{} as Partial<Record<keyof InitialValuesType, boolean>>,
		)

		formik.setTouched(touchedFields, true)

		const hasErrors = currentFields.some((field) => errors[field])

		if (!hasErrors) {
			setStep(step + 1)
		}
	}

	return (
		<ComplaintsBookFormWrapper>
			<form onSubmit={formik.handleSubmit}>
				<Steps disabledManual current={step} items={items} />
				<Footer>
					{step > 1 && (
						<Button
							$variant="secondary"
							$style="outline"
							onClick={() => setStep(step - 1)}
						>
							<FaArrowLeft />
							{intl("button.back")}
						</Button>
					)}
					{!isFinalStep && (
						<Button $variant="primary" type="button" onClick={handleCheck}>
							{intl("button.next")}
						</Button>
					)}
					{isFinalStep && (
						<Button $variant="primary" type="submit">
							{intl("button.send")} <FiSend />
						</Button>
					)}
				</Footer>
			</form>
		</ComplaintsBookFormWrapper>
	)
}

export default ComplaintsBookForm
