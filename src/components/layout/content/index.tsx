import { FC } from 'react'
import { Props } from './types'
import { Container } from '@/components'
import * as Styled from './styled'

export const Content: FC<Props> = ({ children }): JSX.Element => {
	return (
		<Styled.Main>
			<Container children={<>{children}</>} />
		</Styled.Main>
	)
}
