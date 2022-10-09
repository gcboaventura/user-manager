import { Error, Title } from '@/components'
import { FC } from 'react'
import * as Styled from './styled'

export const NotFound: FC = (): JSX.Element => {
	return (
		<Styled.Wrapper>
			<Styled.Icon>
				<Error />
			</Styled.Icon>

			<Title level={1} color="primary">
				Página não encontrada !
			</Title>
		</Styled.Wrapper>
	)
}
