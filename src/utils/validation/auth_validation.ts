import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup) // extend yup

export const authValidationSchema = Yup.object().shape({
	email: Yup.string().email().required('Email is required'),
	password: Yup.string()
		.min(8, 'Password is too short')
		.minUppercase(1)
		.required('Password is required'),
})
