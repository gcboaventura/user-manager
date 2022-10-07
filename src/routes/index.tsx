import { FC } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { arrayRoutes } from './routes'
import { NotFound } from '../views/not-found'
import { IRoute } from './types'

export const Router: FC = (): JSX.Element => {
	const { pathname } = useLocation()

	const item = arrayRoutes.find((x: IRoute) => x.path === pathname)

	return (
		<Routes>
			{item && <Route path={item.path} element={item.component} />}
			{!item && <Route path="*" element={<NotFound />} />}
		</Routes>
	)
}
