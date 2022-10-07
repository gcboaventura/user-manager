import { FC } from 'react'
import { Props } from './types'
import * as Styled from './styled'

export const Container: FC<Props> = ({ children }): JSX.Element => {
	return <Styled.Container>{children}</Styled.Container>
}
