import { FC } from 'react'
import { Props } from './types'
import { Label } from '../label'
import { useField } from 'formik'
import { ErrorMessage } from '../error'
import * as Styled from './styled'

export const TextInput: FC<Props> = ({
	width,
	variant,
	error,
	label,
	icon,
	...props
}): JSX.Element => {
	const [field, meta] = useField(props.name || 'name')

	const hasError = !!(meta.touched && meta.error)

	return (
		<Styled.Wrapper>
			{label && <Label required={props.required} children={label} error={hasError} />}
			<Styled.WrapperInput>
				<Styled.Input
					{...field}
					{...props}
					$width={width}
					$variant={variant}
					$error={hasError}
					$icon={icon ? true : false}
				/>
				{icon && <Styled.WrapperIcon>{icon}</Styled.WrapperIcon>}
			</Styled.WrapperInput>
			{hasError && <ErrorMessage>{meta.error}</ErrorMessage>}
		</Styled.Wrapper>
	)
}
