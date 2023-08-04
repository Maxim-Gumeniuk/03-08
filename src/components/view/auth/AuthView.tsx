import { Flex, FlexRow } from '@/styled/common/Flex'
import { FC, memo } from 'react'
import { AuthButtons } from '../../common/group/auth/AuthButtons'
import { AuthForm } from '../../common/group/auth/AuthForm'

type Props = {
	handleSubmit: () => void
	error: string | null
	touched: boolean
}

const AuthView: FC<Props> = memo(({ handleSubmit, error, touched }) => {
	return (
		<>
			<Flex>
				<FlexRow gap="20px">
					<div
						style={{
							width: '100%',
							textAlign: 'left',
						}}
					></div>
					<div
						style={{
							width: '100%',
						}}
					>
						<AuthForm />
					</div>
					<AuthButtons />
				</FlexRow>
			</Flex>
		</>
	)
})

AuthView.displayName = 'AuthView'

export default AuthView

////TODO
//props dreeling
///add context
///add types
