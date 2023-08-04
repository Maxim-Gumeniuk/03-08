import AuthView from '@/components/view/auth/AuthView'
import { Centered } from '@/styled/common/Centered'
import { Framer } from '@/styled/common/Framer'
import { CommonRoutes } from '@/types/enums/routes/commonRoutes'
import { useFormik } from 'formik'
import { createContext } from 'react'
import { ContextProps } from './login'
import { authValidationSchema } from '@/utils/validation/auth_validation'

const text = {
	title: 'Sign Up',
	subText: 'RETURN TO LOGIN',
}

const navLink = {
	subTextLink: CommonRoutes.login,
}
export const SignUpContext = createContext<ContextProps | null>(null)
const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: authValidationSchema,
		onSubmit: () => {
			console.log('hi')
		},
	})

	const { values, errors, handleChange, handleSubmit, touched } = formik
	const contextValues = {
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
			<SignUpContext.Provider value={contextValues}>
				<Centered>
					<AuthView
						handleSubmit={handleSubmit}
						error={errors.email || null}
						touched={touched.email || false}
					/>
				</Centered>
			</SignUpContext.Provider>
		</Framer>
	)
}

export default SignUp
