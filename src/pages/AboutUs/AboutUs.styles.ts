import styled from "styled-components"

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;

	@media only screen and (min-width: 900px) {
		gap: 5rem;
	}
`
