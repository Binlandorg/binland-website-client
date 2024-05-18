import * as Yup from 'yup'

export const validationSchema = Yup.object({
  fullName: Yup.string().required('validation.input.required.message'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/,
      'contact.us.form.input.email.validation'
    )
    .required('validation.input.required.message'),
  country: Yup.string()
    .max(30, 'contact.us.form.input.company.validation')
    .required('validation.input.required.message'),
  message: Yup.string()
    .min(30, 'contact.us.form.input.message.validation')
    .required('validation.input.required.message'),
})
