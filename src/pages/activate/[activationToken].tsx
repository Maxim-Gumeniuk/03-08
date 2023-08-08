import { ChoosedText } from '@/components/common/variants/ChoosedText'
import { Flex } from '@/styled/common/Flex'
import { useRouter } from 'next/router'

export default function ActivationTokenPage() {
	const router = useRouter()
	const { activationToken } = router.query

	if (activationToken)
		return (
			<>
				{activationToken ? (
					<Flex w={'100%'} h={'100%'}>
						<ChoosedText
							variants="title"
							text="Activation Page"
							upperCase={true}
						/>
					</Flex>
				) : (
					<Flex w={'100%'} h={'100%'}>
						<ChoosedText
							variants="error"
							text="The activation token is not valid"
							upperCase={true}
						/>
					</Flex>
				)}
			</>
		)
}
