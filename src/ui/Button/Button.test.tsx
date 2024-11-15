import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import Button from "./Button"

describe("Button component tests", () => {
	test("Should render primary button component", () => {
		render(<Button $variant="primary">hello world</Button>)

		const button = screen.getByText(/hello world/i)

		expect(button).toHaveAttribute("type", "primary")
		expect(button).not.toHaveAttribute("isfullwidth")
		expect(button).toBeInTheDocument()
	})

	test("Should render secondary button component", () => {
		render(<Button $variant="secondary">hello world</Button>)

		const button = screen.getByText(/hello world/i)

		expect(button).toHaveAttribute("type", "secondary")
		expect(button).not.toHaveAttribute("isfullwidth")
		expect(button).toBeInTheDocument()
	})
})
