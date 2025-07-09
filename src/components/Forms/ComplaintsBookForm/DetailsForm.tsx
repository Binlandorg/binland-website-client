import type { FormikProps } from "formik"
import { CgInfo } from "react-icons/cg"
import { FormattedMessage } from "react-intl"

import RadioGroup from "components/RadioGroup/RadioGroup"
import Select from "components/Select/Select"
import Upload from "components/Upload/Upload"
import useIntlMessages from "hooks/useIntlMessages"
import Paragraph from "ui/Paragraph/Paragraph"
import Textarea from "ui/Textarea/Textarea"
import H4 from "ui/Titles/H4"
import H5 from "ui/Titles/H5"
import Input from "ui/input/Input"
import { requestDetails, services } from "./ComplaintsBookForm.data"
import { RequestDetails, RequestType } from "./ComplaintsBookForm.styles"
import { UploadDescription } from "./ComplaintsBookForm.styles"
import type { InitialValuesType } from "./ComplaintsBookForm.types"

type Props = {
	formik: FormikProps<InitialValuesType>
}

const DetailsForm: React.FC<Props> = ({ formik }) => {
	const intl = useIntlMessages()

	const reviewErrors = (key: keyof InitialValuesType) => {
		const error = formik.errors[key]
		const touched = formik.touched[key]

		return error && touched ? intl(error) : undefined
	}

	const handleFileChange = (files: FileList | null) => {
		if (files) {
			formik.setFieldValue("attachedFile", files[0])
		}
	}

	const options = [
		{
			label: intl("complaints.book.form.select.request.type.claim"),
			value: "claim",
		},
		{
			label: intl("complaints.book.form.select.request.type.complaint"),
			value: "complaint",
		},
	]

	const servicesOptions = services.map((service) => ({
		label: intl(service.title),
		value: service.id,
	}))

	return (
		<>
			<RequestDetails>
				<H4 $weight="medium">
					<FormattedMessage
						id="complaints.book.form.greeting"
						values={{ name: formik.values.firstName }}
					/>
				</H4>
				<H5 $weight="medium">
					{intl("complaints.book.form.fieldset.request.details")}
				</H5>
				<div className="inputs">
					<Select
						label={intl("complaints.book.form.select.service.type")}
						name="serviceType"
						value={formik.values.serviceType}
						options={servicesOptions}
						error={reviewErrors("serviceType")}
						onChange={(value) => formik.setFieldValue("serviceType", value)}
						onBlur={() => formik.setFieldTouched("serviceType", true)}
					/>
					{requestDetails.map((item) => (
						<Input
							key={item.name}
							id={item.name}
							name={item.name}
							label={intl(item.label)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values[item.name]?.toString() || ""}
							error={reviewErrors(item.name)}
						/>
					))}
				</div>
			</RequestDetails>
			<RequestType>
				<H5 $weight="medium">
					{intl("complaints.book.form.fieldset.request.type")}
				</H5>
				<div className="inputs">
					<RadioGroup
						defaultValue="claim"
						className="radio-group"
						name="typeOfRequest"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						options={options}
					/>
					<div className="request-info">
						<div className="claim-info">
							<CgInfo className="icon-info" />
							<Paragraph>
								{intl("complaints.book.form.select.request.type.claim.description")}
							</Paragraph>
						</div>
						<div className="complaint-info">
							<CgInfo className="icon-info" />
							<Paragraph>
								{intl("complaints.book.form.select.request.type.complaint.description")}
							</Paragraph>
						</div>
					</div>
					<Textarea
						id="detailsOfTheRequest"
						name="detailsOfTheRequest"
						label={intl("complaints.book.form.input.request.details")}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.detailsOfTheRequest}
						error={reviewErrors("detailsOfTheRequest")}
					/>
					<Upload
						name="attachedFile"
						label={intl("complaints.book.form.input.attached.file")}
						onFileChange={handleFileChange}
					/>
					<UploadDescription>
						<CgInfo className="icon-info" />
						<Paragraph>
							{intl("complaints.book.form.input.attached.file.description")}
						</Paragraph>
					</UploadDescription>
					<Textarea
						id="orderDetails"
						name="orderDetails"
						label={intl("complaints.book.form.input.order.details")}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.orderDetails}
						error={reviewErrors("orderDetails")}
					/>
				</div>
			</RequestType>
		</>
	)
}

export default DetailsForm
