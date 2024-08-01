import axios from 'axios'

interface IEmailData {
  fullName: string
  email: string
  country: string
  message: string
  services: string
}

export const sendEmail = async (data: IEmailData) => {
  const parsedData = {
    from_name: data.fullName,
    from_email: data.email,
    to_name: 'Binland',
    message: data.message,
    from_country: data.country,
    from_services: data.services,
  }

  const emailServiceConfig = {
    service_id: import.meta.env.VITE_REACT_EMAIL_JS_APP_SERVICE_ID,
    template_id: import.meta.env.VITE_REACT_EMAIL_JS_APP_TEMPLATE_IID,
    user_id: import.meta.env.VITE_REACT_EMAIL_JS_APP_PUBLIC_KEY,
    template_params: parsedData,
  }

  try {
    await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      emailServiceConfig
    )
  } catch (error) {
    console.log(error)
    throw new Error('Error del servidor')
  }
}
