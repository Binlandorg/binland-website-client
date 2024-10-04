import { useEffect, useRef, useState } from "react"

import useIntlMessages from "hooks/useIntlMessages"
import type { ITableOfContent } from "types/components/tableofcontent"
import H5 from "ui/Titles/H5"
import { TableOfContentStyled } from "./TableOfContent.styles"

const TableOfContent: React.FC<ITableOfContent> = ({
	items,
	className,
	sectionsRef = useRef<HTMLElement[]>([]),
}) => {
	const intl = useIntlMessages()
	const [active, setActive] = useState<string>("")
	const ulRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const section of entries)
					if (section.isIntersecting) setActive(section.target.id)
			},
			{ threshold: 0.1, rootMargin: "-90px 0px -70% 0px" },
		)
		if (sectionsRef.current)
			for (const section of sectionsRef.current) observer.observe(section)

		return () => {
			if (sectionsRef.current)
				for (const section of sectionsRef.current) observer.unobserve(section)
		}
	}, [sectionsRef])

	const handle = (target: HTMLElement) => {
		if (target) {
			const id = target.getAttribute("href")
			if (id) setActive(id.replace("#", ""))
		}
	}

	const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
		const target = event.target as HTMLElement
		if (target.tagName === "A") handle(target)
	}

	const handleKeyUp = (event: React.KeyboardEvent<HTMLUListElement>) => {
		const target = event.target as HTMLElement
		if (target.tagName === "A" && event.key === "Enter") handle(target)
	}

	return (
		<TableOfContentStyled className={className ?? ""}>
			<H5 $weight="bold">{intl("component.table.of.content.title")}</H5>
			<ul ref={ulRef} onClick={handleClick} onKeyUp={handleKeyUp}>
				{items?.map(({ id, title, ariaLabel }, idx) => (
					<li key={`toc-${id}`}>
						<a
							href={`#${id}`}
							className={active === id ? "active" : ""}
							aria-label={intl(ariaLabel)}
						>{`${idx + 1}. ${intl(title)}`}</a>
					</li>
				))}
			</ul>
		</TableOfContentStyled>
	)
}

export default TableOfContent
