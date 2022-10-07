import { FC, ReactNode } from 'react'

export interface IRoute {
	component: ReactNode
	path: string
	permissions?: number[]
}

export interface PrivateRouteProps {
	component: FC
}
