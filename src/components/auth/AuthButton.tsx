import { isSecond } from '@/pages/login'
import { Flex } from '@/styled/common/Flex'
import { ChoosedButton } from '@/styled/common/variants/ChoosedButton'
import { CommonRoutes } from '@/types/enums/commonRoutes'
import { useContext } from 'react'

export const AuthButton = () => {
	const isSecondButton = useContext(isSecond)
	return (
		<>
			{isSecondButton ? (
				<Flex
					style={{
						width: '100%',
						gridGap: '20px',
					}}
				>
					<ChoosedButton text="Sign In" />
					<ChoosedButton text="Sign Up" link={CommonRoutes.signUp} />
				</Flex>
			) : (
				<ChoosedButton text="Sign Up" />
			)}
		</>
	)
}
