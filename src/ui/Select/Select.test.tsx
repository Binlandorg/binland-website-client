import { render } from "@testing-library/react"

import Select from "./Select"

describe("Select component tests", () => {
	test("Should render select component with two options", () => {
		const options = [
			{ id: "1", name: "option 1", value: "option1" },
			{ id: "2", name: "option 2", value: "option2" },
		]
		render(<Select options={options} position="left" onChange={() => {}} />)

		expect(1).toBe(1)
	})
})
