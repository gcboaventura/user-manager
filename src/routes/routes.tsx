import { IRoute } from './types'
import { Dashboard, Login, Users } from '@/views'
import { PrivateRoute } from './private'

export const arrayRoutes: IRoute[] = [
	{
		component: <Login />,
		path: '/'
	},
	{
		component: <PrivateRoute component={Dashboard} />,
		path: '/dashboard'
	},
	{
		component: <PrivateRoute component={Users} />,
		path: '/users'
	}
]
