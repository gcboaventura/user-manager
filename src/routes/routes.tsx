import { IRoute } from './types'
import { Login, Users } from '@/views'
import { PrivateRoute } from './private'

export const arrayRoutes: IRoute[] = [
	{
		component: <Login />,
		path: '/'
	},
	{
		component: <PrivateRoute component={Users} />,
		path: '/users'
	}
]
