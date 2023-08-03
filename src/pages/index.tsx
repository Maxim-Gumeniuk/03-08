import { Centered } from '@/styled/common/Centered'
import { ChoosedText } from '@/styled/common/ChoosedText'
import { ContainerForText } from '@/styled/common/ContainerForText'
import { Flex, FlexRow } from '@/styled/common/Flex'
import { Framer } from '@/styled/common/Framer'
import { Input } from '@/styled/common/Input'

export default function Page() {
	return (
		<Framer>
			<Centered>
				<Flex
					style={{
						marginBottom: '30px',
					}}
				>
					<ChoosedText
						variants="title"
						text="Sign In"
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
							</FlexRow>
						</div>
					</FlexRow>
				</Flex>
			</Centered>
		</Framer>
	)
}
