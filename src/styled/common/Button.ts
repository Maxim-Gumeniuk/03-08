import styled from 'styled-components'
import { COLORS } from '../../types/enums/styles/colors'

interface ButtonProps {
	width?: string
	height?: string
	bg?: string
	color?: string
	alignItems?: string
	jc?: string
}

export const Button = styled.div<ButtonProps>`
	width: ${(props) => props.width || '25%'};
	height: ${(props) => props.height || '40px'};
	background-color: ${(props) => props.bg || COLORS.LIGHT_GREEN};
	color: ${(props) => props.color || COLORS.WHITE};
	display: flex;
	align-items: ${(props) => props.alignItems || 'center'};
	justify-content: ${(props) => props.jc || 'center'};
	cursor: pointer;
`
