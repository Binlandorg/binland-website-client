import { FormattedMessage } from "react-intl"

import ContentLayout from "components/Tabs/ContentLayout/ContentLayout"
import HorizontalTabs from "components/Tabs/HorizontalTabs/HorizontalTabs"
import VerticalTabs from "components/Tabs/VerticalTabs/VerticalTabs"
import useIntlMessages from "hooks/useIntlMessages"
import type { ITabProperties, IVerticalTabs } from "types/ui/tabs"
import Container from "ui/Container/Container"
import Section from "ui/Section/Section"
import H2 from "ui/Titles/H2"
import MobileServices from "./MobileServices/MobileServices"
import { serviceContentData } from "./Services.data"
import { CustomSingleWord, ServicesWrapper } from "./Services.styles"
import ServiceContent from "./ServicesContent/ServicesContent"

const Services: React.FC = () => {
	const intl = useIntlMessages()

	const subitemsDesign: Array<IVerticalTabs> = [
		{
			key: serviceContentData["grafic-pieces"].id,
			label: serviceContentData["grafic-pieces"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["grafic-pieces"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["brand-development"].id,
			label: serviceContentData["brand-development"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["brand-development"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["ux-ui-design"].id,
			label: serviceContentData["ux-ui-design"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["ux-ui-design"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["ux-writer"].id,
			label: serviceContentData["ux-writer"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["ux-writer"]} />
				</ContentLayout>
			),
		},
	]

	const subItemsSoftwareDevelopment: Array<IVerticalTabs> = [
		{
			key: serviceContentData["web-development"].id,
			label: serviceContentData["web-development"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["web-development"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["multiplatform-apps"].id,
			label: serviceContentData["multiplatform-apps"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["multiplatform-apps"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["mobile-development"].id,
			label: serviceContentData["mobile-development"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["mobile-development"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["e-commerce"].id,
			label: serviceContentData["e-commerce"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["e-commerce"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["cloud-migration"].id,
			label: serviceContentData["cloud-migration"].title,
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["cloud-migration"]} />
				</ContentLayout>
			),
		},
	]

	const subItemsDigitalManagement: Array<IVerticalTabs> = [
		{
			key: serviceContentData["seo-optimization"].id,
			label: "home.services.digital.management.seo.optimization",
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["seo-optimization"]} />
				</ContentLayout>
			),
		},
		{
			key: serviceContentData["digital-marketing"].id,
			label: "home.services.digital.management.digital.marketing",
			children: (
				<ContentLayout>
					<ServiceContent {...serviceContentData["digital-marketing"]} />
				</ContentLayout>
			),
		},
	]

	const items: Array<ITabProperties> = [
		{
			key: "1",
			label: "home.services.design.title",
			children: <VerticalTabs key={"design1"} items={subitemsDesign} />,
		},
		{
			key: "2",
			label: "home.services.software.development.title",
			children: (
				<VerticalTabs key={"softwaredev1"} items={subItemsSoftwareDevelopment} />
			),
		},
		{
			key: "3",
			label: "home.services.digital.management.title",
			children: (
				<VerticalTabs key={"digitalmana1"} items={subItemsDigitalManagement} />
			),
		},
	]

	return (
		<Section id="services" size="lg" type="margin">
			<Container size="xl" isfullwidth>
				<ServicesWrapper size="xl" isfullwidth>
					{/* <Container size="sm"> */}
					{/* <ServicesTitle> */}
					<H2 withDot>
						<FormattedMessage
							defaultMessage=""
							id="home.services.title"
							values={{
								service: intl("home.services.title.only.services"),
								b: (str) => <CustomSingleWord>{str}</CustomSingleWord>,
							}}
						/>
						{/* <span className="span-point">.</span> */}
					</H2>
					{/* </ServicesTitle> */}
					{/* </Container> */}
					<HorizontalTabs items={items} />
					<MobileServices items={items} />
				</ServicesWrapper>
			</Container>
		</Section>
	)
}

export default Services
