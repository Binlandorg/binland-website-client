import type { FormikProps } from "formik"
import { Link } from "react-router-dom"

import Checkbox from "components/Checkbox/Checkbox"
import Select from "components/Select/Select"
import useIntlMessages from "hooks/useIntlMessages"
import H5 from "ui/Titles/H5"
import Input from "ui/input/Input"
import { contactDetails, ownerData } from "./ComplaintsBookForm.data"
import { ContactDetails, InfoAuthorization } from "./ComplaintsBookForm.styles"
import { OwnerData } from "./ComplaintsBookForm.styles"
import type { InitialValuesType } from "./ComplaintsBookForm.types"

type Props = {
	formik: FormikProps<InitialValuesType>
}

const ContactDataForm: React.FC<Props> = ({ formik }) => {
	const intl = useIntlMessages()

	const reviewErrors = (key: keyof InitialValuesType) => {
		const error = formik.errors[key]
		const touched = formik.touched[key]

		return error && touched ? intl(error) : undefined
	}

	const documentTypeOptions = [
		{
			label: intl("complaints.book.form.document.type.option.dni"),
			value: "dni",
		},
		{
			label: intl("complaints.book.form.document.type.option.passport"),
			value: "passport",
		},
		{
			label: intl("complaints.book.form.document.type.option.ruc"),
			value: "ruc",
		},
	]

	return (
		<>
			<OwnerData>
				<H5 $weight="medium">{intl("complaints.book.form.fieldset.owner.data")}</H5>
				<div className="inputs">
					<Select
						label={intl("complaints.book.form.document.type.select.label")}
						name="documentType"
						value={formik.values.documentType}
						options={documentTypeOptions}
						error={reviewErrors("documentType")}
						onChange={(value) => formik.setFieldValue("documentType", value)}
						onBlur={() => formik.setFieldTouched("documentType", true)}
					/>
					{ownerData.map((item) => (
						<Input
							key={item.name}
							id={item.name}
							name={item.name}
							label={intl(item.label)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values[item.name].toString()}
							error={reviewErrors(item.name)}
						/>
					))}
				</div>
			</OwnerData>
			<ContactDetails>
				<H5 $weight="medium">
					{intl("complaints.book.form.fieldset.contact.data")}
				</H5>
				<div className="inputs">
					<Input
						id="address"
						label={intl("complaints.book.form.address.input.label")}
						name="address"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.address}
						error={reviewErrors("address")}
					/>
					<Select
						label={intl("complaints.book.form.state.select.label")}
						name="state"
						value={formik.values.state}
						options={[
							{
								label: "Arequipa",
								value: "arequipa",
							},
						]}
						error={reviewErrors("state")}
						onChange={(value) => formik.setFieldValue("state", value)}
						onBlur={() => formik.setFieldTouched("state", true)}
					/>
					<Select
						label={intl("complaints.book.form.county.select.label")}
						name="county"
						value={formik.values.county}
						options={[
							{
								label: "Arequipa",
								value: "arequipa",
							},
						]}
						error={reviewErrors("county")}
						onChange={(value) => formik.setFieldValue("county", value)}
						onBlur={() => formik.setFieldTouched("county", true)}
					/>
					<Select
						label={intl("complaints.book.form.city.select.label")}
						name="city"
						value={formik.values.city}
						options={[
							{
								label: "Cerro Colorado",
								value: "cerroColorado",
							},
						]}
						error={reviewErrors("city")}
						onChange={(value) => formik.setFieldValue("city", value)}
						onBlur={() => formik.setFieldTouched("city", true)}
					/>
					{contactDetails.map((item) => (
						<Input
							key={item.name}
							id={item.name}
							name={item.name}
							label={intl(item.label)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values[item.name].toString()}
							error={reviewErrors(item.name)}
						/>
					))}
				</div>
			</ContactDetails>
			<InfoAuthorization>
				<Checkbox
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					checked={formik.values.isAccepted}
					name="isAccepted"
				>
					{intl("complaints.book.form.info.authorization")}
					<Link to={"/privacy-policy"}>
						{intl("complaints.book.form.info.authorization.link")}
					</Link>
				</Checkbox>
			</InfoAuthorization>
		</>
	)
}

export default ContactDataForm
