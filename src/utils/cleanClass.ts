type Args = string | undefined | boolean | number | null

const cleanClass = (...args: Args[]) =>
	args
		.filter(Boolean)
		.map((arg) => String(arg))
		.join(" ")

export default cleanClass
