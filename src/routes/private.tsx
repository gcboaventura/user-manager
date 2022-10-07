import { FC, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthHelper } from '@/helpers'
import { PrivateRouteProps } from './types'
import { Content, Leftbar, Navbar } from '@/components'

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)

	const auth = new AuthHelper().isAuthenticated()

	if (auth)
		return (
			<>
				<Navbar status={show} open={() => setShow(!show)} />
				<Leftbar show={show} onClose={() => setShow(false)} />
				<Content children={<Component />} />
			</>
		)
	return <Navigate to="/" />
}
