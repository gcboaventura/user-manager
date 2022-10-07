import { FC, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthHelper } from '@/helpers'
import { PrivateRouteProps } from './types'
import { Content, Leftbar, Navbar } from '@/components'

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)

	if (new AuthHelper().isAuthenticated())
		return (
			<>
				<Navbar status={show} open={() => setShow(!show)} />
				<Leftbar show={show} onClose={() => setShow(false)} />
				<Content children={<Component />} />
			</>
		)
	return <Navigate to="/" />
}
