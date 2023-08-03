import AuthFormComponent from '@/components/view/auth/AuthForm'
import { Centered } from '@/styled/common/Centered'
import { Framer } from '@/styled/common/Framer'
import { CommonRoutes } from '@/types/enums/commonRoutes'
import { createContext } from 'react'

export const isSecond = createContext<boolean>(false)

const text = {
	title: 'Sign In',
	subText: 'RESET PASSWORD',
}

const navLink = {
	subTextLink: CommonRoutes.resetPassword,
}

const Login = () => {
	return (
		<Framer>
			<Centered>
				<isSecond.Provider value={true}>
					<AuthFormComponent text={text} navLink={navLink} />
				</isSecond.Provider>
			</Centered>
		</Framer>
	)
}

export default Login
