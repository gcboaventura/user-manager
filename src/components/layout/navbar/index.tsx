import { Container } from '@/components/ui'
import { FC } from 'react'
import * as Styled from './styled'
import { Props } from './types'

export const Navbar: FC<Props> = ({ open, status }): JSX.Element => {
	return (
		<Styled.Navbar>
			<Container
				children={
					<>
						{!status && <Styled.MenuIcon onClick={open} />}
						{status && <Styled.CloseIcon onClick={open} />}
					</>
				}
			/>
		</Styled.Navbar>
	)
}
