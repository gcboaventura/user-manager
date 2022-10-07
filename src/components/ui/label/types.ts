export interface Props extends React.InputHTMLAttributes<HTMLLabelElement> {
	children: string
	required?: boolean
	error?: boolean
}

export interface PropsLabelStyle {
	$error?: boolean
}
