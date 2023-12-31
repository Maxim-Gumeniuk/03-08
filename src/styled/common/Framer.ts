import styled from 'styled-components'
import { COLORS } from '../../types/enums/styles/colors'

interface FramerProps {
	border?: string
}

export const Framer = styled.div<FramerProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-height: 400px;
	min-width: 400px;
	width: 40%;
	height: 50%;
	border: ${(props) => props.border || `1.5px solid ${COLORS.LIGHT_GREEN}`};
	background-color: ${COLORS.DARK_GREEN};
	color: ${COLORS.WHITE};
`
