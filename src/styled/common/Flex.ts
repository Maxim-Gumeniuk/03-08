import { styled } from 'styled-components'

interface FlexProps {
	justifyContent?: string
	alignItems?: string
	gap?: string
	h?: string
	w?: string
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	justify-content: ${(props) => props.justifyContent || 'center'};
	align-items: ${(props) => props.alignItems || 'center'};
	height: ${(props) => props.h || 'auto'};
	width: ${(props) => props.w || 'auto'};
`

export const FlexRow = styled(Flex)`
	width: 100%;
	flex-direction: column;
	& > * {
		margin-bottom: ${(props) => props.gap || '0px '};
	}
`
