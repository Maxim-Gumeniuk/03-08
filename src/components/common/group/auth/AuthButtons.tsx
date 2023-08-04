import { Flex } from '@/styled/common/Flex'
import { ChoosedButton } from '@/components/common/variants/ChoosedButton'
import { CommonRoutes } from '@/types/enums/routes/commonRoutes'
import { useContext } from 'react'
import { LoginContext } from '@/pages/login'
import { SignUpContext } from '@/pages/sign_up'
import { ActualContextByRoute } from '@/hooks/ActualRoute'

export const AuthButtons = () => {
	const actualContext = ActualContextByRoute(
		CommonRoutes.login,
		LoginContext,
		SignUpContext
	)

	const props = useContext(actualContext)

	const { handleSubmit } = props || {}
	return (
		<>
			{props?.isSecond ? (
				<Flex
					style={{
						width: '100%',
						gridGap: '20px',
					}}
				>
					<ChoosedButton text="Sign In" onClick={handleSubmit!} />
					<ChoosedButton text="Sign Up" link={CommonRoutes.signUp} />
				</Flex>
			) : (
				<ChoosedButton text="Sign Up" onClick={handleSubmit!} />
			)}
		</>
	)
}
