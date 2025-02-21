import type { ServicesContentProps } from "types/components/serviceSection"
import brandingIMG from "./../../assets/images/illustrations/service-branding.png"
import cloudMigrationIMG from "./../../assets/images/illustrations/service-cloud-migration.png"
import crossPlatformAppIMG from "./../../assets/images/illustrations/service-cross-apps.png"
import digitalMarketingIMG from "./../../assets/images/illustrations/service-digital-marketing.png"
import eCommerceIMG from "./../../assets/images/illustrations/service-e-commerce.png"
import fullStackAppIMG from "./../../assets/images/illustrations/service-full-stack.png"
import graphicDesignIMG from "./../../assets/images/illustrations/service-graphic-design.png"
import mobileDevelopmentIMG from "./../../assets/images/illustrations/service-mobile-dev.png"
import seoOptimizationIMG from "./../../assets/images/illustrations/service-seo.png"
import uxuiDesignIMG from "./../../assets/images/illustrations/service-ux-ui-design.png"
import uxWritingIMG from "./../../assets/images/illustrations/service-ux-writing.png"

export const serviceContentData: ServicesContentProps = {
	"grafic-pieces": {
		id: "grafic-pieces",
		title: "home.services.design.graphic.design",
		description: "home.services.design.graphic.design.description",
		includes: [
			{ id: "1", text: "includes.grafic-pieces.1" },
			{ id: "2", text: "includes.grafic-pieces.2" },
			{ id: "3", text: "includes.grafic-pieces.3" },
			{ id: "4", text: "includes.grafic-pieces.4" },
			{ id: "5", text: "includes.grafic-pieces.5" },
		],
		image: graphicDesignIMG,
		link: "/contact-us",
		category: "home.services.design.title",
		alt: "home.services.design.graphic.design.image.alt",
	},
	"brand-development": {
		id: "brand-development",
		title: "home.services.design.branding",
		description: "home.services.design.branding.description",
		includes: [
			{ id: "1", text: "includes.brand-development.1" },
			{ id: "2", text: "includes.brand-development.2" },
			{ id: "3", text: "includes.brand-development.3" },
			{ id: "4", text: "includes.brand-development.4" },
			{ id: "5", text: "includes.brand-development.5" },
			{ id: "6", text: "includes.brand-development.6" },
		],
		image: brandingIMG,
		link: "/contact-us",
		category: "home.services.design.title",
		alt: "home.services.design.branding.image.alt",
	},
	"ux-ui-design": {
		id: "ux-ui-design",
		title: "home.services.design.ux.ui.design",
		description: "home.services.design.ux.ui.design.description",
		includes: [
			{ id: "1", text: "includes.ux-ui-design.1" },
			{ id: "2", text: "includes.ux-ui-design.2" },
			{ id: "3", text: "includes.ux-ui-design.3" },
			{ id: "4", text: "includes.ux-ui-design.4" },
			{ id: "5", text: "includes.ux-ui-design.5" },
			{ id: "6", text: "includes.ux-ui-design.6" },
		],
		image: uxuiDesignIMG,
		link: "/contact-us",
		category: "home.services.design.title",
		alt: "home.services.design.ux.ui.design.image.alt",
	},
	"ux-writer": {
		id: "uu-writer",
		title: "home.services.design.ux.writing",
		description: "home.services.design.ux.writing.description",
		includes: [
			{ id: "1", text: "includes.ux-writer.1" },
			{ id: "2", text: "includes.ux-writer.2" },
			{ id: "3", text: "includes.ux-writer.3" },
			{ id: "4", text: "includes.ux-writer.4" },
			{ id: "5", text: "includes.ux-writer.5" },
			{ id: "6", text: "includes.ux-writer.6" },
		],
		image: uxWritingIMG,
		link: "/contact-us",
		category: "home.services.design.title",
		alt: "home.services.design.ux.writing.image.alt",
	},
	"web-development": {
		id: "web-development",
		title: "home.services.software.development.full.stack.applications",
		description:
			"home.services.software.development.full.stack.applications.description",
		includes: [
			{ id: "1", text: "includes.web-development.1" },
			{ id: "2", text: "includes.web-development.2" },
			{ id: "3", text: "includes.web-development.3" },
			{ id: "4", text: "includes.web-development.4" },
			{ id: "5", text: "includes.web-development.5" },
			{ id: "6", text: "includes.web-development.6" },
		],
		image: fullStackAppIMG,
		link: "/contact-us",
		category: "home.services.software.development.title",
		alt: "home.services.software.development.full.stack.applications.image.alt",
	},
	"multiplatform-apps": {
		id: "multiplatform-apps",
		title: "home.services.software.development.cross.platform.applications",
		description:
			"home.services.software.development.cross.platform.applications.description",
		includes: [
			{ id: "1", text: "includes.multiplatform-apps.1" },
			{ id: "2", text: "includes.multiplatform-apps.2" },
			{ id: "3", text: "includes.multiplatform-apps.3" },
			{ id: "4", text: "includes.multiplatform-apps.4" },
			{ id: "5", text: "includes.multiplatform-apps.5" },
			{ id: "6", text: "includes.multiplatform-apps.6" },
		],
		image: crossPlatformAppIMG,
		link: "/contact-us",
		category: "home.services.software.development.title",
		alt: "home.services.software.development.cross.platform.applications.image.alt",
	},
	"mobile-development": {
		id: "mobile-development",
		title: "home.services.software.development.mobile.development",
		description:
			"home.services.software.development.mobile.development.description",
		includes: [
			{ id: "1", text: "includes.mobile-development.1" },
			{ id: "2", text: "includes.mobile-development.2" },
			{ id: "3", text: "includes.mobile-development.3" },
			{ id: "4", text: "includes.mobile-development.4" },
			{ id: "5", text: "includes.mobile-development.5" },
			{ id: "6", text: "includes.mobile-development.6" },
		],
		image: mobileDevelopmentIMG,
		link: "/contact-us",
		category: "home.services.software.development.title",
		alt: "home.services.software.development.mobile.development.image.alt",
	},
	"e-commerce": {
		id: "e-commerce",
		title: "home.services.software.development.ecommerce",
		description: "home.services.software.development.ecommerce.description",
		includes: [
			{ id: "1", text: "includes.e-commerce.1" },
			{ id: "2", text: "includes.e-commerce.2" },
			{ id: "3", text: "includes.e-commerce.3" },
			{ id: "4", text: "includes.e-commerce.4" },
			{ id: "5", text: "includes.e-commerce.5" },
			{ id: "6", text: "includes.e-commerce.6" },
		],
		image: eCommerceIMG,
		link: "/contact-us",
		category: "home.services.software.development.title",
		alt: "home.services.software.development.ecommerce.image.alt",
	},
	"cloud-migration": {
		id: "cloud-migration",
		title: "home.services.software.development.cloud.migrations",
		description:
			"home.services.software.development.cloud.migrations.description",
		includes: [
			{ id: "1", text: "includes.cloud-migration.1" },
			{ id: "2", text: "includes.cloud-migration.2" },
			{ id: "3", text: "includes.cloud-migration.3" },
			{ id: "4", text: "includes.cloud-migration.4" },
			{ id: "5", text: "includes.cloud-migration.5" },
			{ id: "6", text: "includes.cloud-migration.6" },
		],
		image: cloudMigrationIMG,
		link: "/contact-us",
		category: "home.services.software.development.title",
		alt: "home.services.software.development.cloud.migrations.image.alt",
	},
	"seo-optimization": {
		id: "seo-optimization",
		title: "home.services.digital.management.seo.optimization",
		description: "home.services.digital.management.seo.optimization.description",
		includes: [
			{ id: "1", text: "includes.seo-optimization.1" },
			{ id: "2", text: "includes.seo-optimization.2" },
			{ id: "3", text: "includes.seo-optimization.3" },
			{ id: "4", text: "includes.seo-optimization.4" },
			{ id: "5", text: "includes.seo-optimization.5" },
			{ id: "6", text: "includes.seo-optimization.6" },
		],
		image: seoOptimizationIMG,
		link: "/contact-us",
		category: "home.services.digital.management.title",
		alt: "home.services.digital.management.seo.optimization.image.alt",
	},
	"digital-marketing": {
		id: "digital-marketing",
		title: "home.services.digital.management.digital.marketing",
		description: "home.services.digital.management.digital.marketing.description",
		includes: [
			{ id: "1", text: "includes.digital-marketing.1" },
			{ id: "2", text: "includes.digital-marketing.2" },
			{ id: "3", text: "includes.digital-marketing.3" },
			{ id: "4", text: "includes.digital-marketing.4" },
			{ id: "5", text: "includes.digital-marketing.5" },
			{ id: "6", text: "includes.digital-marketing.6" },
		],
		image: digitalMarketingIMG,
		link: "/contact-us",
		category: "home.services.digital.management.title",
		alt: "home.services.digital.management.digital.marketing.image.alt",
	},
}
