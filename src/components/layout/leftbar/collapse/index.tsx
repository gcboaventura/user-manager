import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { FC, useState } from 'react'
import { Props } from './types'
import { useTheme } from 'styled-components'
import * as Styled from './styled'

export const CollapseItems: FC<Props> = ({ icon, name, children }): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false)

	const {
		colors: {
			textColors: { primary },
			neutralColors: {
				grey: { g2 }
			}
		}
	} = useTheme()

	return (
		<List sx={{ padding: '0', borderBottom: `0.5px solid ${g2}`, borderRadius: '0 0 5px 0' }}>
			<ListItemButton onClick={() => setOpen(!open)}>
				{icon && <Styled.WrapperIcon>{icon}</Styled.WrapperIcon>}

				<ListItemText primary={name} sx={{ color: primary }} />
				{open ? <Styled.ArrowUp /> : <Styled.ArrowDown />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{children}
				</List>
			</Collapse>
		</List>
	)
}
