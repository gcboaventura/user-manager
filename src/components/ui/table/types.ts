export interface Props {
	items: any[]
	columns: Column[]
	onClick?: (row: any) => void
}

export interface Column {
	key: string
	title: string
}
