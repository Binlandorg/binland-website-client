import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import logo from '../../assets/images/logo/Isologo[H-Primario].svg'
import useIntlMessages from 'hooks/useIntlMessages'
import {
  StyledFooter,
  FooterWrapper,
  FooterLogoWrapper,
  FooterSocialMedia,
  FooterLinks,
  FooterInfo,
} from './Footer.styles'
import SocialMedia from 'components/SocialMedia/SocialMedia'
import { enterpriseLinks, legalLinks } from './Footer.data'

const Footer: React.FC = () => {
  const intl = useIntlMessages()
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <FooterWrapper size="xl" isfullwidth>
        <FooterLogoWrapper>
          <Link
            to="/"
            rel="noopener noreferrer"
            aria-label={intl('footer.logotipo.aria.label')}
          >
            <LazyLoadImage
              className="footer-logo"
              src={logo}
              alt="Binland logo"
              width={192}
              height={29}
            />
          </Link>
          <p>
            &copy; Binland {currentYear}. {intl('footer.all.rights.reserved')}.
          </p>
        </FooterLogoWrapper>
        <FooterInfo>
          <FooterLinks>
            <span className="links-title">Legal</span>
            <div className="container-links">
              {legalLinks.map((element) => (
                <Link key={element.id} to={element.to} className="link-item">
                  <span className="text-footer">{intl(element.name)}</span>
                </Link>
              ))}
            </div>
          </FooterLinks>
          <FooterLinks>
            <span className="links-title">{intl('footer.enterprise')}</span>
            <div className="container-links">
              {enterpriseLinks.map((element) => (
                <Link key={element.id} to={element.to} className="link-item">
                  <span className="text-footer">{intl(element.name)}</span>
                </Link>
              ))}
            </div>
          </FooterLinks>
          <FooterSocialMedia>
            <span className="links-title">{intl('footer.contact.us')}</span>
            <div className="social-media__content">
              <SocialMedia />
              <div className="container-email">
                <HiOutlineMail size={20} style={{ color: 'white' }} />
                <span className="text-footer">binland.contacto@gmail.com</span>
              </div>
            </div>
          </FooterSocialMedia>
        </FooterInfo>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer
