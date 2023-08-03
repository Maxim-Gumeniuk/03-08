import AuthFormComponent from '@/components/auth/AuthForm'
import { Centered } from '@/styled/common/Centered'
import { Framer } from '@/styled/common/Framer'
import { CommonRoutes } from '@/types/enums/commonRoutes'

const text = {
	title: 'Sign Up',
	subText: 'RETURN TO LOGIN',
}

const navLink = {
	subTextLink: CommonRoutes.login,
}

const SignUp = () => {
	return (
		<Framer>
			<Centered>
				<AuthFormComponent text={text} navLink={navLink} />
			</Centered>
		</Framer>
	)
}

export default SignUp
