import { ChoosedText } from '@/components/common/variants/ChoosedText'
import { Flex, FlexRow } from '@/styled/common/Flex'
import { Input } from '@/styled/common/Input'
import { ChoosedButton } from '@/components/common/variants/ChoosedButton'
import { FC, memo } from 'react'
import { AuthButton } from './AuthButton'
import { NavLink, TextAuthForm } from '@/types/interfaces/authForm'

type Props = {
	text: TextAuthForm
	navLink: NavLink
}

const AuthFormComponent: FC<Props> = memo(({ text, navLink }) => {
	return (
		<>
			<Flex
				style={{
					marginBottom: '30px',
				}}
			>
				<ChoosedText
					variants="title"
					text={text.title}
					upperCase={true}
				/>
			</Flex>
			<Flex>
				<FlexRow gap="20px">
					<div
						style={{
							width: '100%',
							textAlign: 'left',
						}}
					>
						<FlexRow gap="10px">
							<Flex
								justifyContent="flex-start"
								style={{
									width: '75%',
								}}
							>
								<ChoosedText
									variants="primary"
									text="Your email"
									upperCase={true}
								/>
							</Flex>
							<Input placeholder="Email" />
						</FlexRow>
					</div>
					<div
						style={{
							width: '100%',
						}}
					>
						<FlexRow gap="10px">
							<Flex
								justifyContent="flex-start"
								style={{
									width: '75%',
								}}
							>
								<ChoosedText
									variants="primary"
									text="Your password"
									upperCase={true}
								/>
							</Flex>
							<Input placeholder="Password" />
							<Flex
								justifyContent="flex-end"
								style={{
									width: '75%',
								}}
							>
								<ChoosedButton
									text={text.subText}
									variants="native"
									link={navLink.subTextLink}
								/>
							</Flex>
						</FlexRow>
					</div>
					<AuthButton />
				</FlexRow>
			</Flex>
		</>
	)
})

AuthFormComponent.displayName = 'AuthFormComponent'

export default AuthFormComponent
