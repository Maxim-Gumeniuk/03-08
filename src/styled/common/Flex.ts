import { styled } from 'styled-components'

interface FlexProps {
	justifyContent?: string
	alignItems?: string
	gap?: string
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${(props) => props.justifyContent || 'center'};
	align-items: ${(props) => props.alignItems || 'center'};
`

export const FlexRow = styled(Flex)`
	width: 100%;
	flex-direction: column;
	& > * {
		margin-bottom: ${(props) => props.gap || '0px '};
	}
`
