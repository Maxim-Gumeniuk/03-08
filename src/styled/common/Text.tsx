import styled from 'styled-components'

interface TextProps {
	color?: string
	size?: string
	weight?: number
	upperCase?: boolean
}

export const Text = styled.span<TextProps>`
	color: ${(props) => props.color || '#000'};
	font-size: ${(props) => props.size || '20px'};
	font-weight: ${(props) => props.weight || 800};
	text-transform: ${(props) => (props.upperCase ? 'uppercase' : 'none')};
	line-height: 120%;
`
