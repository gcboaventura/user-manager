import { IRoute } from './types'
import { Login, Users, FormUser, NotFound } from '@/views'
import { PrivateRoute } from './private'

export const arrayRoutes: IRoute[] = [
	{
		component: <Login />,
		path: '/'
	},
	{
		component: <PrivateRoute component={FormUser} />,
		path: '/users/detail/:id'
	},
	{
		component: <PrivateRoute component={FormUser} />,
		path: '/users/form'
	},
	{
		component: <PrivateRoute component={Users} />,
		path: '/users'
	},
	{
		component: <NotFound />,
		path: '*'
	}
]
