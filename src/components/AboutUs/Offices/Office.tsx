import CollageOffice from './CollageOffice/CollageOffice'
import SectionAboutUs from '../SectionAboutUs/SectionAboutUs'
import useIntlMessages from 'hooks/useIntlMessages'
import { IDescription } from 'types/components/aboutus'

export const Office = () => {
  const intl = useIntlMessages()
  const description: IDescription = {
    title: intl('about.us.offices.sub.title.collage'),
    subTitle: intl('about.us.offices.title.collage'),
  }

  return (
    <SectionAboutUs
      title={intl('about.us.offices.title')}
      titlePosition="left"
      description={description}
    >
      <CollageOffice />
    </SectionAboutUs>
  )
}

export default Office
