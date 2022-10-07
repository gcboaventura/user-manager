import * as Yup from 'yup'
import { FormValues } from './types'

export const schemaLogin: Yup.SchemaOf<FormValues> = Yup.object().shape({
	email: Yup.string().required('Obrigatório.'),
	password: Yup.string().required('Obrigatório.')
})
