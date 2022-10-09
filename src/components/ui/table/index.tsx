import { FC } from 'react'
import {
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow
} from '@mui/material'
import { useTheme } from 'styled-components'
import { Column, Props } from './types'

export const TableComponent: FC<Props> = ({ items, columns, onClick }): JSX.Element => {
	const {
		colors: { neutralColors, brandColors }
	} = useTheme()

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: brandColors.secondary,
			color: theme.palette.common.white
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 14,
			fontWeight: 'bold'
		}
	}))

	return (
		<TableContainer>
			<Table stickyHeader>
				<TableHead sx={{ backgroundColor: neutralColors.white }}>
					<TableRow>
						{columns.map((x: Column, index: number) => {
							return (
								<StyledTableCell sx={{ colors: neutralColors.white }} align="center" key={index}>
									{x.title}
								</StyledTableCell>
							)
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{items
						.sort((a, b) => a.name.localeCompare(b.name))
						.map((x: any, index: number) => {
							return (
								<TableRow
									hover
									sx={{ backgroundColor: neutralColors.white, cursor: 'pointer' }}
									key={index}
									onClick={() => onClick && onClick(x)}
								>
									{columns.map((y: Column, index: number) => {
										return (
											<TableCell align="center" key={index}>
												{x[y.key]}
											</TableCell>
										)
									})}
								</TableRow>
							)
						})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
