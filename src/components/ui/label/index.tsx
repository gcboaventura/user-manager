import { FC } from 'react'
import { Props } from './types'
import * as Styled from './styled'

export const Label: FC<Props> = ({ children, required, error, ...props }): JSX.Element => {
	return (
		<Styled.Label {...props} $error={error}>
			{children}
			{required && <Styled.Required>*</Styled.Required>}
		</Styled.Label>
	)
}
