import useElementSize from "@custom-react-hooks/use-element-size"

import useScrollbarWidth from "hooks/useScrollbarWidth"
import type { ITitle } from "types/components/aboutus"
import Container from "ui/Container/Container"
import Section from "ui/Section/Section"
import H2 from "ui/Titles/H2"
import H3 from "ui/Titles/H3"
import H4 from "ui/Titles/H4"
import {
	DescriptionSubTitle,
	DescriptionTitle,
	Line,
	SectionDescription,
	SectionTitle,
	TitleDot,
	TitleLine,
} from "./SectionAboutUs.styles"

const SectionAboutUs: React.FC<ITitle> = ({
	title,
	titlePosition,
	description,
	children,
}: ITitle) => {
	const [setRef, size] = useElementSize()
	const scrollbarWidth = useScrollbarWidth()

	return (
		<Section size="sm" type="margin">
			<Container size="xl" isfullwidth>
				<SectionTitle $position={titlePosition} ref={setRef}>
					<H2>
						{title}
						<TitleDot>.</TitleDot>
					</H2>
					<TitleLine>
						<Line
							$position={titlePosition}
							$sectionWidth={size.width}
							$scrollbarWidth={scrollbarWidth}
						/>
					</TitleLine>
				</SectionTitle>
				{description ? (
					<SectionDescription size="xl">
						<DescriptionSubTitle>
							<H4 $weight="medium">{description.title}</H4>
						</DescriptionSubTitle>
						<DescriptionTitle>
							<H3 $weight="bold">
								{description.subTitle}
								<TitleDot>.</TitleDot>
							</H3>
						</DescriptionTitle>
					</SectionDescription>
				) : (
					<></>
				)}
				{children}
			</Container>
		</Section>
	)
}

export default SectionAboutUs
