import { Fragment, useEffect, useState } from "react"

import H4 from "ui/Titles/H4"
import cleanClass from "utils/cleanClass"
import { StepsContainer, StepsContent, StepsHeader } from "./Steps.styles"

type Items = {
	title: string
	content: React.ReactNode
}

type Props = {
	current: number
	className?: string
	items: Items[]
	disabledManual?: boolean
}

const Steps: React.FC<Props> = ({
	current,
	className,
	items,
	disabledManual = false,
}) => {
	const steps = items.map((_, index) => index + 1)
	const [activeStep, setActiveStep] = useState<number>(current)

	useEffect(() => {
		setActiveStep(current)
	}, [current])

	return (
		<>
			<StepsContainer className={cleanClass("binland-steps", className)}>
				<StepsHeader $activeStep={activeStep} $disabledManual={disabledManual}>
					{steps.map((step) => (
						<Fragment key={step}>
							<div
								className={cleanClass("step", activeStep === step && "active")}
								onClick={disabledManual ? undefined : () => setActiveStep(step)}
								onKeyUp={disabledManual ? undefined : () => setActiveStep(step)}
								onKeyDown={disabledManual ? undefined : () => setActiveStep(step)}
							>
								<H4 $weight="medium">{step}</H4>
							</div>
							<span className="line" />
						</Fragment>
					))}
				</StepsHeader>
				<StepsContent>
					{items.map((item, index) => (
						<div
							key={item.title}
							className={cleanClass("item", activeStep === index + 1 && "active")}
						>
							{item.content}
						</div>
					))}
				</StepsContent>
			</StepsContainer>
		</>
	)
}

export default Steps
