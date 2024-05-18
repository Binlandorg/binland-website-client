import { useFormik } from 'formik'
// import { useRef, useState } from 'react'
import { useState } from 'react'
import { TbSend } from 'react-icons/tb'
// import ReCAPTCHA from 'react-google-recaptcha'
// import { MdError } from 'react-icons/md'

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
// import { ErrorMessage } from 'ui/input/Input.styles'

const ContactUsForm: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<IServiceOptions[]>(
    []
  )
  // const [verified, setVerified] = useState<boolean | null>(null)
  // const [errorCaptcha, setErrorCaptcha] = useState<string>('')
  // const captcha = useRef(null)

  // let siteKey

  // try {
  //   siteKey = import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY
  // } catch (error) {
  //   console.error('Error con la clave del sitio de reCAPTCHA:', error)
  //   siteKey = null
  // }

  const intl = useIntlMessages()
  const formik = useFormik({
    initialValues: {
      fullName: '',
      country: '',
      email: '',
      message: '',
    } as IValues,
    validationSchema,
    onSubmit: (values) => {
      // if (!verified) {
      //   setErrorCaptcha('Por favor acepte el captcha')
      // } else {
        // setErrorCaptcha('')
        sendEmail({
          fullName: values.fullName,
          email: values.email,
          country: values.country,
          message: values.message,
          services: selectedServices.map((service) => service.name).join(', '),
        })
      // }
    },
  })

  // const handleCaptchaChange = () => {
  //   setVerified(true)
  // }

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
          label={intl('contact.us.form.label.country')}
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
        {/* <div className="recaptcha-container">
          {siteKey && (
            <ReCAPTCHA
              ref={captcha}
              id="captcha"
              onChange={handleCaptchaChange}
              sitekey={siteKey}
              className="g-recaptcha"
            />
          )}
          {errorCaptcha && (
            <ErrorMessage>
              <MdError />
              {intl('contact.us.form.error.recapcha')}
            </ErrorMessage>
          )}
        </div> */}
        <ButtonForm type="primary" rightIcon={<TbSend />}>
          {intl('contact.us.form.button')}
        </ButtonForm>
      </FormWrapper>
    </ContainerForm>
  )
}

export default ContactUsForm
