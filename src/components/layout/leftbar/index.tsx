import { FC } from 'react'
import { Props } from './types'
import { Drawer, List } from '@mui/material'
import { UserSettings } from './user-settings'
import { CollapseItems } from './collapse'
import { Item } from './item'
import { Users, System } from '@/components'
import { useTheme } from 'styled-components'

export const Leftbar: FC<Props> = ({ show, onClose }): JSX.Element => {
	const {
		colors: {
			neutralColors: { white }
		}
	} = useTheme()

	return (
		<Drawer
			PaperProps={{
				style: { width: '350px', backgroundColor: white, borderRadius: '0 10px 10px 0' }
			}}
			anchor="left"
			open={show}
			onClose={onClose}
		>
			<UserSettings onClose={onClose} />
			<List sx={{ padding: '0' }}>
				<CollapseItems
					icon={<System />}
					name="Sistema"
					children={
						<>
							<Item name="Usuários" path="/users" onClose={onClose} pl sub icon={<Users />} />
						</>
					}
				/>
			</List>
		</Drawer>
	)
}
