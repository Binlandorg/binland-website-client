import { useEffect, useState } from "react"

type StoredValue<T> = T | (() => T)

function getSavedValue<T>(key: string, initialValue: StoredValue<T>): T {
	const savedValue = JSON.parse(localStorage.getItem(key) || "null") as T | null
	if (savedValue !== null) return savedValue

	return initialValue instanceof Function ? initialValue() : initialValue
}

export default function useLocalStorage<T>(
	key: string,
	initialValue: StoredValue<T>,
): [T, (newValue: T) => void] {
	const [value, setValue] = useState<T>(() => {
		return getSavedValue<T>(key, initialValue)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue]
}
