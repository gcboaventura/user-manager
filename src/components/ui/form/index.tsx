import { Formik, Form as FormikForm, FormikValues, FormikHelpers } from 'formik'
import { useEffect, useState } from 'react'
import { Props } from './types'

export function Form<Values>({ children, initialValues, onSubmit, ...props }: Props<Values>) {
	const [key, setKey] = useState<number>(0)

	useEffect(() => {
		setKey(key + 1)
	}, [initialValues])

	return (
		<Formik
			key={key}
			//@ts-ignore
			onSubmit={(values: Values, formikHelpers: FormikHelpers<Values>) =>
				onSubmit(values, formikHelpers)
			}
			initialValues={initialValues as FormikValues}
			{...props}
		>
			<FormikForm>{children}</FormikForm>
		</Formik>
	)
}
