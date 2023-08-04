import { ContextProps } from '@/pages/login'
import { useRouter } from 'next/router'
import { Context, useMemo } from 'react'

export function ActualContextByRoute(
	route: string,
	firstContext: Context<ContextProps | null>,
	secondContext: Context<ContextProps | null>
) {
	const router = useRouter()
	const actualContext = useMemo(() => {
		return router.asPath === route ? firstContext : secondContext
	}, [firstContext, route, router.asPath, secondContext])

	return actualContext
}
