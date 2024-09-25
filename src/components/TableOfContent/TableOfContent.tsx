import useIntlMessages from "hooks/useIntlMessages"
import type { ITableOfContent } from "types/components/tableofcontent"
import H5 from "ui/Titles/H5"
import { TableOfContentStyled } from "./TableOfContent.styles"

const TableOfContent: React.FC<ITableOfContent> = ({ items, className }) => {
	const intl = useIntlMessages()

	return (
		<TableOfContentStyled className={className ?? ""}>
			<H5 $weight="bold">{intl("component.table.of.content.title")}</H5>
			<ul>
				{items?.map(({ id, title }, idx) => (
					<li key={`toc-${id}`}>
						<a href={`#${id}`}>{`${idx + 1}. ${intl(title)}`}</a>
					</li>
				))}
			</ul>
		</TableOfContentStyled>
	)
}

export default TableOfContent
