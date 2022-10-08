import { FC, HTMLInputTypeAttribute, useState } from 'react'
import { Grid } from '@mui/material'
import { FormValues, schemaLogin } from './helpers'
import { useSelector, useDispatch } from 'react-redux'
import {
	Email,
	EyeSlash,
	Eye,
	TextInput,
	Title,
	Form,
	Button,
	Login as LoginIcon
} from '@/components'
import * as Styled from './helpers/styled'
import { RootState } from '@/store/config-store'
import { LoginMockActions } from '@/store/auth'

export const Login: FC = (): JSX.Element => {
	const [type, setType] = useState<HTMLInputTypeAttribute>('password')

	const initial: FormValues = {
		email: '',
		password: ''
	}

	const dispatch = useDispatch()

	const { login } = useSelector((state: RootState) => ({
		login: state.auth.loginMock
	}))

	const fetchLogin = (data: FormValues): void => {
		dispatch(LoginMockActions.fetchLoginMock({ ...data }))
	}

	const handleIcon = (): JSX.Element =>
		type === 'password' ? (
			<EyeSlash cursor={'pointer'} onClick={() => setType('text')} />
		) : (
			<Eye cursor={'pointer'} onClick={() => setType('password')} />
		)

	return (
		<>
			<Styled.Background />
			<Styled.Wrapper container direction="row" justifyContent="center" alignItems="center">
				<Styled.Card item xs={11} sm={6} md={4} lg={4} xl={2}>
					<Styled.CardHeader container direction="row" justifyContent="center">
						<Title level={2}>Login</Title>
					</Styled.CardHeader>

					<Form<FormValues>
						initialValues={initial}
						validationSchema={schemaLogin}
						onSubmit={(values: FormValues) => fetchLogin(values)}
						children={
							<Grid container spacing={3} direction="column">
								<Grid item xs={12}>
									<TextInput
										label="Email"
										name="email"
										placeholder="seu email"
										type="email"
										required
										icon={<Email />}
									/>
								</Grid>

								<Grid item xs={12}>
									<TextInput
										label="Senha"
										name="password"
										placeholder="sua senha"
										type={type}
										required
										icon={handleIcon()}
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										children="Login"
										width="100%"
										loading={login.isLoading}
										icon={<LoginIcon />}
										variant="contained"
										type="submit"
									/>
								</Grid>
							</Grid>
						}
					/>
				</Styled.Card>
			</Styled.Wrapper>
		</>
	)
}
