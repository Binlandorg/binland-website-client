import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { useState } from 'react'
import { TbSend } from 'react-icons/tb'

import './toaster.css'
import { sendEmail } from 'services/SendEmail'
import { validationSchema } from './ContactUsForm.yup'
import useIntlMessages from 'hooks/useIntlMessages'
import Input from 'ui/input/Input'
import Textarea from 'ui/Textarea/Textarea'
import { FormWrapper, ContainerForm, ButtonForm } from './ContactUsForm.styles'
import MultiSelect from 'ui/MultiSelect/MultiSelect'
import { servicesOptions } from './FormData'
import { IValues } from 'types/ui/Form'
import { IServiceOptions } from 'types/ui/Multiselect'

const ContactUsForm: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<IServiceOptions[]>(
    []
  )

  const intl = useIntlMessages()
  const formik = useFormik({
    initialValues: {
      fullName: '',
      country: '',
      email: '',
      message: '',
    } as IValues,
    validationSchema,

    onSubmit: (values, { resetForm, setSubmitting }) => {
      const toastId = toast.loading(intl('contact.us.form.toast.loading'))
      sendEmail({
        fullName: values.fullName,
        email: values.email,
        country: values.country,
        message: values.message,
        services: selectedServices
          .map((service) => intl(service.name))
          .join(', '),
      })
        .then((result) => {
          if (result.success) {
            resetForm()
            setSelectedServices([])
            toast.success(intl('contact.us.form.toast.success'), {
              id: toastId,
              duration: 2000,
              icon: <FaCheckCircle size={20} />,
              position: 'top-center',
              className: 'toast-custom toast-success',
            })
          } else {
            throw new Error('Error al enviar')
          }
        })
        .catch(() => {
          toast.error(intl('contact.us.form.toast.error'), {
            id: toastId,
            duration: 2000,
            icon: <FaExclamationCircle size={20} />,
            position: 'top-center',
            className: 'toast-custom toast-error',
          })
        })
        .finally(() => {
          setSubmitting(false)
        })
      // }
    },
  })

  return (
    <ContainerForm>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Input
          label={`${intl('contact.us.form.label.fullname')} *`}
          type="text"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          error={
            formik.errors.fullName && formik.touched.fullName
              ? intl(formik.errors.fullName)
              : null
          }
        />

        <Input
          label={`${intl('contact.us.form.label.email')} *`}
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={
            formik.errors.email && formik.touched.email
              ? intl(formik.errors.email)
              : null
          }
        />
        <Input
          label={`${intl('contact.us.form.label.country')} *`}
          type="text"
          id="country"
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
          error={
            formik.errors.country && formik.touched.country
              ? intl(formik.errors.country)
              : null
          }
        />
        <MultiSelect
          options={servicesOptions}
          onChange={setSelectedServices}
          searchPlaceholder={intl('contact.us.form.multiselect.search.service')}
          label={intl('contact.us.form.label.what.service')}
          value={selectedServices}
        />
        <Textarea
          label={`${intl('contact.us.form.label.message')} *`}
          name="message"
          id="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          error={
            formik.errors.message && formik.touched.message
              ? intl(formik.errors.message)
              : null
          }
        />
        <ButtonForm
          type="primary"
          rightIcon={<TbSend />}
          onClick={formik.handleSubmit}
          // disabled={formik.isSubmitting || !formik.isValid}
        >
          {intl('contact.us.form.button')}
        </ButtonForm>
      </FormWrapper>
      <Toaster />
    </ContainerForm>
  )
}

export default ContactUsForm
