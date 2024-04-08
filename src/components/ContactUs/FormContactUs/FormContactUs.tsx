import { useFormik } from 'formik'
import { useRef, useState } from 'react'
import { TbSend } from 'react-icons/tb'
import ReCAPTCHA from 'react-google-recaptcha'

import { sendEmail } from 'services/SendEmail'
import { validationSchema } from './FormContactUs.yup'
import useIntlMessages from 'hooks/useIntlMessages'
import Input from 'ui/input/Input'
import Textarea from 'ui/Textarea/Textarea'
import {
  Error,
  FormWrapper,
  ContainerForm,
  ButtonForm,
} from './FormContactUs.styles'
import MultiSelect from 'ui/MultiSelect/MultiSelect'

interface IValues {
  fullName: string
  country: string
  email: string
  message: string
}

const initialValues: IValues = {
  fullName: '',
  country: '',
  email: '',
  message: '',
}

interface IServiceOptions {
  key: string
  name: string
}

const servicesOptions: IServiceOptions[] = [
  { key: '1', name: 'Development of graphic pieces' },
  { key: '2', name: 'Branding' },
  { key: '3', name: 'UX/UI Design' },
  { key: '4', name: 'UX Writing' },
  { key: '5', name: 'Web development' },
  { key: '6', name: 'Full stack applications' },
  { key: '7', name: 'Multiplatform applications' },
  { key: '8', name: 'Mobile Development - iOS, Android, Flutter' },
  { key: '9', name: 'E-commerce' },
  { key: '10', name: 'Cloud migrations and infrastructure' },
  { key: '11', name: 'Digital staff' },
  { key: '12', name: 'SEO Optimization/ SEM' },
  { key: '13', name: 'Digital Marketing' },
]

const FormContacUs: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<IServiceOptions[]>(
    []
  )
  const [verified, setVerified] = useState<boolean | null>(null)
  const [errorCaptcha, setErrorCaptcha] = useState<string>('')
  const captcha = useRef(null)

  const intl = useIntlMessages()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (!verified) {
        setErrorCaptcha('Por favor acepte el captcha')
      } else {
        setErrorCaptcha('')
        sendEmail({
          fullName: values.fullName,
          email: values.email,
          country: values.country,
          message: values.message,
          services: selectedServices.map((service) => service.name).join(', '),
        })
      }
    },
  })

  const handleCaptchaChange = () => {
    setVerified(true)
  }

  return (
    <ContainerForm>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Input
          label="Nombre completo *"
          type="text"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.errors.fullName && formik.touched.fullName ? (
          <Error>{intl(formik.errors.fullName)}</Error>
        ) : null}
        <Input
          label="Email *"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <Error>{intl(formik.errors.email)}</Error>
        ) : null}
        <Input
          label="País"
          type="text"
          id="country"
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        />
        {formik.errors.country && formik.touched.country ? (
          <Error>{intl(formik.errors.country)}</Error>
        ) : null}
        <MultiSelect
          options={servicesOptions}
          onChange={setSelectedServices}
          placeholder="Buscar servicios"
          label="¿Qué servicio se requiere?"
        />
        <Textarea
          label="Mensaje *"
          name="message"
          id="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.errors.message && formik.touched.message ? (
          <Error>{intl(formik.errors.message)}</Error>
        ) : null}
        <div className="recaptcha-container">
          <ReCAPTCHA
            ref={captcha}
            id="captcha"
            onChange={handleCaptchaChange}
            sitekey={import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY}
            className="g-recaptcha"
          />
          {errorCaptcha && <Error>Por favor, acepta el captcha.</Error>}
        </div>
        <ButtonForm type="primary" rightIcon={<TbSend />}>
          {intl('contact.us.form.button')}
        </ButtonForm>
      </FormWrapper>
    </ContainerForm>
  )
}

export default FormContacUs
