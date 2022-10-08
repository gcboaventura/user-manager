import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { arrayRoutes } from './routes'
import { IRoute } from './types'

export const Router: FC = (): JSX.Element => {
	return (
		<Routes>
			{arrayRoutes.map((x: IRoute, index: number) => (
				<Route key={index} path={x.path} element={x.component} />
			))}
		</Routes>
	)
}
