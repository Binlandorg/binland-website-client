import ReactGA from "react-ga4"
import { HiOutlineMail } from "react-icons/hi"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link, useLocation } from "react-router-dom"

import SocialMedia from "components/SocialMedia/SocialMedia"
import { COMPANY_CONTACT_EMAIL } from "context/constants/constans"
import useIntlMessages from "hooks/useIntlMessages"
import { useEffect } from "react"
import Book from "ui/Icons/Book"
import logo from "../../assets/images/binland/isologo-primary.svg"
import { enterpriseLinks, legalLinks } from "./Footer.data"
import {
	FooterInfo,
	FooterLinks,
	FooterLogoWrapper,
	FooterSocialMedia,
	FooterWrapper,
	StyledFooter,
} from "./Footer.styles"

const Footer: React.FC = () => {
	const intl = useIntlMessages()
	const currentYear = new Date().getFullYear()

	const location = useLocation()

	useEffect(() => {
		ReactGA.send({
			hitType: "pageview",
			page: location.pathname,
		})
	}, [location])

	return (
		<StyledFooter>
			<FooterWrapper size="xl" isfullwidth>
				<FooterLogoWrapper>
					<Link
						to="/"
						rel="noopener noreferrer"
						aria-label={intl("footer.logotipo.aria.label")}
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
						&copy; Binland {currentYear}. {intl("footer.all.rights.reserved")}.
					</p>
					<Link to="/complaints-book" className="container-book">
						<Book size={20} color="white" />
						<span className="text-footer">{intl("footer.complaints.book")}</span>
					</Link>
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
						<span className="links-title">{intl("footer.enterprise")}</span>
						<div className="container-links">
							{enterpriseLinks.map((element) => (
								<Link key={element.id} to={element.to} className="link-item">
									<span className="text-footer">{intl(element.name)}</span>
								</Link>
							))}
						</div>
					</FooterLinks>
					<FooterSocialMedia>
						<span className="links-title">{intl("footer.contact.us")}</span>
						<div className="social-media__content">
							<SocialMedia />
							<div className="container-email">
								<HiOutlineMail size={20} style={{ color: "white" }} />
								<span className="text-footer">{COMPANY_CONTACT_EMAIL}</span>
							</div>
							<Link to="/complaints-book" className="container-book">
								<Book size={20} color="white" />
								<span className="text-footer">{intl("footer.complaints.book")}</span>
							</Link>
						</div>
					</FooterSocialMedia>
				</FooterInfo>
			</FooterWrapper>
		</StyledFooter>
	)
}

export default Footer
