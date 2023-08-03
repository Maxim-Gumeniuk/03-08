import AuthFormComponent from '@/components/view/auth/AuthForm'
import { useFormik } from 'formik'
import { Centered } from '@/styled/common/Centered'
import { Framer } from '@/styled/common/Framer'
import { CommonRoutes } from '@/types/enums/commonRoutes'
import { createContext } from 'react'
// import * as Yup from 'yup'
// import YupPassword from 'yup-password'

export const isSecond = createContext<boolean>(false)

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
		onSubmit: () => {
			console.log('hi')
		},
	})

	const { values, errors, handleChange, handleSubmit, touched } = formik
	return (
		<Framer>
			<Centered>
				<isSecond.Provider value={true}>
					<AuthFormComponent
						text={text}
						navLink={navLink}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
						value={values.email}
						error={errors.email || null}
						touched={touched.email || false}
						name="email"
					/>
				</isSecond.Provider>
			</Centered>
		</Framer>
	)
}

export default Login
