import AgroAMYMAppIMG from "assets/images/portfolio/agroamym-app.webp"
import BinlandEcommerceIMG from "assets/images/portfolio/binland-e-commerce.webp"
import DicovertWebDesignIMG from "assets/images/portfolio/dicovert-web-design.webp"
import PollosControlAppIMG from "assets/images/portfolio/polloscontrol-app.webp"
import type { PortfolioType } from "types/global"

export const portfolios: PortfolioType[] = [
	{
		id: "binland:e-commerce",
		name: "Binland",
		description: "E-commerce Web Design",
		image: BinlandEcommerceIMG,
		tags: ["e-commerce", "web design", "binland", "main"],
		to: "/portfolio/binland-e-commerce",
	},
	{
		id: "agroamym:app-web",
		name: "AgroAMYM",
		description: "portfolio.project.type.web.platform",
		image: AgroAMYMAppIMG,
		tags: ["platform", "web", "main"],
		to: "/portfolio/agroamym-app-web",
	},
	{
		id: "dicovert:web-design",
		name: "Dicovert",
		description: "Web Design",
		image: DicovertWebDesignIMG,
		tags: ["web design", "main"],
		to: "/portfolio/dicovert-web-design",
	},
	{
		id: "polloscontrol:app-web",
		name: "Pollos Control",
		description: "portfolio.project.type.web.platform",
		image: PollosControlAppIMG,
		tags: ["platform", "web", "main"],
		to: "/portfolio/polloscontrol-app-web",
	},
]
