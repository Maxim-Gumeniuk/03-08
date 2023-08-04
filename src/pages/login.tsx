import { FormikErrors, FormikTouched, FormikValues, useFormik } from 'formik'
import { Centered } from '@/styled/common/Centered'
import { Framer } from '@/styled/common/Framer'
import { CommonRoutes } from '@/types/enums/routes/commonRoutes'
import { ChangeEvent, createContext } from 'react'
import AuthView from '@/components/view/auth/AuthView'
import {
	InitialValues,
	NavLink,
	TextAuthForm,
} from '@/types/interfaces/auth/form'
import { authValidationSchema } from '@/utils/validation/auth_validation'
export interface ContextProps {
	isSecond?: boolean
	text: TextAuthForm
	navLink: NavLink
	values: FormikValues
	errors: FormikErrors<InitialValues>
	handleChange: (e: ChangeEvent<any>) => void
	handleSubmit: () => void
	touched: FormikTouched<InitialValues>
	name: InitialValues
}

export const LoginContext = createContext<ContextProps | null>(null)

const text = {
	title: 'Sign In',
	subText: 'RESET PASSWORD',
}

const navLink = {
	subTextLink: CommonRoutes.resetPassword,
}

const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: authValidationSchema,
		onSubmit: () => {
			console.log('submit')
		},
	})

	const { values, errors, handleChange, handleSubmit, touched } = formik

	const contextValue = {
		isSecond: true,
		text,
		navLink,
		values,
		errors,
		handleChange,
		handleSubmit,
		touched,
		name: {
			email: 'email',
			password: 'password',
		},
	}

	return (
		<Framer>
			<Centered>
				<LoginContext.Provider value={contextValue}>
					<AuthView
						handleSubmit={handleSubmit}
						error={errors.email || null}
						touched={touched.email || false}
					/>
				</LoginContext.Provider>
			</Centered>
		</Framer>
	)
}

export default Login
