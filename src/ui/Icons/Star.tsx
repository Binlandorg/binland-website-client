const Star = ({ size = 24 }: { size?: number }) => {
	return (
		<svg
			data-name="Capa 2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			role="img"
			aria-label="star"
			width={size}
			height={size}
		>
			<path
				d="M50 25c-13.8 0-25 11.19-25 25 0-13.8-11.19-25-25-25 13.81 0 25-11.19 25-25 0 13.81 11.19 25 25 25Z"
				data-name="Capa 1"
				fill="currentColor"
			/>
		</svg>
	)
}

export default Star
