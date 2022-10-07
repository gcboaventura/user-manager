import { FC } from 'react'
import { Props } from './types'
import { useTheme } from 'styled-components'
import { ListItemButton, ListItemText } from '@mui/material'
import * as Styled from './styled'

export const Item: FC<Props> = ({ name, icon, path, onClose, pl, sub }): JSX.Element => {
	const {
		colors: {
			neutralColors: {
				grey: { g2 }
			}
		}
	} = useTheme()

	return (
		<Styled.Link to={path} onClick={onClose}>
			<ListItemButton
				sx={{
					pl: pl ? 4 : 2,
					borderBottom: sub ? 'none' : `0.5px solid ${g2}`,
					borderRadius: '0 0 5px 0'
				}}
			>
				{icon && <Styled.WrapperIcon>{icon}</Styled.WrapperIcon>}
				<ListItemText primary={name} sx={{ marginLeft: '-10px' }} />
			</ListItemButton>
		</Styled.Link>
	)
}
