import { Flex, FlexRow } from '@/styled/common/Flex'
import { ChoosedText } from '../../variants/ChoosedText'
import { Input } from '@/styled/common/Input'
import { useContext } from 'react'
import { ChoosedButton } from '../../variants/ChoosedButton'
import { LoginContext } from '@/pages/login'
import { SignUpContext } from '@/pages/sign_up'
import { CommonRoutes } from '@/types/enums/routes/commonRoutes'
import { ActualContextByRoute } from '@/hooks/ActualRoute'

export const AuthForm = () => {
	const actualContext = ActualContextByRoute(
		CommonRoutes.login,
		LoginContext,
		SignUpContext
	)

	const props = useContext(actualContext)

	const { text, handleChange, values, name, navLink, errors, touched } =
		props || {}

	return (
		<>
			<Flex
				style={{
					marginBottom: '30px',
				}}
			>
				<ChoosedText
					variants="title"
					text={text?.title}
					upperCase={true}
				/>
			</Flex>
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
				<Input
					placeholder={name?.email}
					name={name?.email}
					value={values?.email}
					onChange={handleChange}
				/>
				{errors?.email && touched?.email ? (
					<ChoosedText
						variants="error"
						text={errors.email}
						upperCase={true}
					/>
				) : null}
			</FlexRow>
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
				<Input
					placeholder={name?.password}
					name={name?.password}
					value={values?.password}
					onChange={handleChange}
				/>
				{errors?.password && touched?.password ? (
					<ChoosedText
						variants="error"
						text={errors.password}
						upperCase={true}
					/>
				) : null}
				<Flex
					justifyContent="flex-end"
					style={{
						width: '75%',
					}}
				>
					<ChoosedButton
						jc="flex-end"
						text={text?.subText}
						variants="native"
						link={navLink?.subTextLink}
					/>
				</Flex>
			</FlexRow>
		</>
	)
}
