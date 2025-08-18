import AgroAMYMAppIMG from "assets/images/portfolio/agroamym-app.webp"
import BinlandEcommerceIMG from "assets/images/portfolio/binland-e-commerce.webp"
import DicovertWebDesignIMG from "assets/images/portfolio/dicovert-web-design.webp"
import NaturalezaEcoAmigableIMG from "assets/images/portfolio/eco-amigable-design.png"
import PollosControlAppIMG from "assets/images/portfolio/polloscontrol-app.webp"
import AgroAMYMVideo from "assets/video/agro-amym-video.mp4"
import BinlandEcommerceVideo from "assets/video/binland-tech-video.mp4"
import DicovertVideo from "assets/video/dicovert-video.mp4"
import NaturalezaEcoAmigableVideo from "assets/video/naturaleza-eco-amigable-video.mp4"
import PollosControlVideo from "assets/video/pollos-control-video.mp4"
import type { PortfolioType } from "types/global"

export const portfolios: PortfolioType[] = [
	{
		id: "binland:e-commerce",
		name: "Binland Tech",
		description: "Web",
		image: BinlandEcommerceIMG,
		video: BinlandEcommerceVideo,
		tags: ["e-commerce", "web", "binland", "main"],
		to: "/portfolio/binland-e-commerce",
	},
	{
		id: "agroamym:app-web",
		name: "AgroAMYM",
		description: "portfolio.project.type.web.platform",
		image: AgroAMYMAppIMG,
		video: AgroAMYMVideo,
		tags: ["platform", "web", "main"],
		to: "/portfolio/agroamym-app-web",
	},
	{
		id: "dicovert:web-design",
		name: "Dicovert",
		description: "Web",
		image: DicovertWebDesignIMG,
		video: DicovertVideo,
		tags: ["web", "main"],
		to: "/portfolio/dicovert-web-design",
	},
	{
		id: "polloscontrol:app-web",
		name: "Pollos Control",
		description: "portfolio.project.type.web.platform",
		image: PollosControlAppIMG,
		video: PollosControlVideo,
		tags: ["platform", "web", "main"],
		to: "/portfolio/polloscontrol-app-web",
	},
	{
		id: "naturaleza-eco-amigable:design",
		name: "Naturaleza Eco-Amigable",
		description: "portfolio.project.type.design",
		image: NaturalezaEcoAmigableIMG,
		video: NaturalezaEcoAmigableVideo,
		tags: ["design", "main"],
		to: "/portfolio/naturaleza-eco-amigable-diseno",
	},
]
