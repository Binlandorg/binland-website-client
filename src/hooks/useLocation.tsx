import { useQuery } from "@tanstack/react-query"

import { getLocations } from "services/location"

export const useLocation = () => {
	const { data, ...rest } = useQuery({
		queryKey: ["locations"],
		queryFn: () => getLocations(),
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: Number.POSITIVE_INFINITY,
	})

	return {
		data: data?.data,
		...rest,
	}
}
