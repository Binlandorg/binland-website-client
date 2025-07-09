import styled from "styled-components"

import { breakpoints } from "shared/breakpoints"
import { colors } from "styles/colors"
import Paragraph from "ui/Paragraph/Paragraph"

export const ComplaintsBookFormWrapper = styled.div`
	background-color: ${colors.white.main};
	padding: 1.125rem;
	border-radius: 1rem;
	flex: 1;
	width: 100%;

	@media only screen and (min-width: ${breakpoints.lg}) {
		padding: 3rem;
	}
`

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 2.25rem;
	gap: 1rem;
	width: 100%;

	& > button {
		width: 100%;
		max-width: initial;
	}

	& button:last-child {
		margin-left: auto;
	}

	@media only screen and (min-width: ${breakpoints.xs}) {
		flex-wrap: nowrap;
		justify-content: space-between;

		& > button {
			max-width: fit-content;
		}
	}

	@media only screen and (min-width: ${breakpoints.lg}) {
		margin-top: 3rem;
	}
`

export const OwnerData = styled.div`
	margin-top: 2.25rem;
	text-align: left;

	& > h5 {
		color: ${colors.tertiary.normal[700]};
	}

	& .inputs {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-top: 1rem;

		@media only screen and (min-width: ${breakpoints.lg}) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1.25rem;
		}

		& .select {
			outline: 1px solid red;
		}
	}
`

export const ContactDetails = styled.div`
	margin-top: 1rem;
	text-align: left;

	& > h5 {
		color: ${colors.tertiary.normal[700]};
	}

	& .inputs {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-top: 1rem;

		@media only screen and (min-width: ${breakpoints.lg}) {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			gap: 1.25rem;

			& > *:nth-child(1) {
				grid-column: 1 / 7;
			}

			& > *:nth-child(2),
			& > *:nth-child(3),
			& > *:nth-child(4) {
				grid-column: span 2;
			}

			& > *:nth-child(5),
			& > *:nth-child(6) {
				grid-column: span 3;
			}
		}
	}
`

export const InfoAuthorization = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: flex-start;
	margin-top: 1.5rem;

	& > label {
		text-align: left;

		& a {
			color: ${colors.primary.main};
		}
	}
`
export const RequestDetails = styled.div`
	margin-top: 1rem;
	text-align: left;

	& > h4 {
		color: ${colors.tertiary.normal[700]};
	}

	& > h5 {
		color: ${colors.tertiary.normal[700]};
	}

	& .inputs {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-top: 1rem;

		@media only screen and (min-width: ${breakpoints.lg}) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1.25rem;

			& > *:nth-child(3) {
				grid-column: span 2;
			}
		}
	}
`
export const RequestType = styled.div`
	margin-top: 1rem;
	text-align: left;

	& > h5 {
		color: ${colors.tertiary.normal[700]};
	}

	& .inputs {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-top: 1rem;

		& .radio-group {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 0.75rem;
		}

		& .request-info {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 0.75rem;

			& .claim-info,
			.complaint-info {
				display: flex;
				gap: 0.75rem;

				& .icon-info {
					flex-shrink: 0;
					font-size: 1rem;
					color: ${colors.tertiary.normal[700]};
					margin-top: 0.25rem;
				}
			}
		}
	}
`

export const UploadDescription = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: baseline;

	& .icon-info {
		flex-shrink: 0;
		font-size: 1rem;
		color: ${colors.tertiary.normal[700]};
		margin-top: 0.25rem;
	}
`

export const InformationDetails = styled.div`
	display: flex;
	text-align: left;
	gap: 8px;

	& .icon-info {
		color: ${colors.tertiary.normal[700]};
		font-size: 20px;
		flex-shrink: 0;
	}
`

export const ContactInformation = styled.div`
	margin-top: 1rem;
	text-align: left;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h5 {
		color: ${colors.tertiary.normal[700]};
	}

	& .info-description {
		color: ${colors.tertiary.normal[700]};
	}

	& .inputs {
		display: flex;
		flex-direction: column;
		gap: 20px;

		& .radio-group {
			display: flex;
			flex-wrap: wrap;
			gap: 12px;

			& .info-email,
			.info-address {
				white-space: nowrap;
				flex: 1;
			}
		}
	}
`

export const InfoParagraph = styled(Paragraph)`
	font-size: 12px;
`
