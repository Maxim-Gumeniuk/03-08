import styled from 'styled-components'
import { COLORS } from '../../types/enums/styles/colors'

interface InputProps {
	placeholder?: string
}

export const Input = styled.input`
	width: 75%;
	height: 40px;
	border-radius: 6px;
	border: none;
	padding: 0px 10px;

	&::placeholder {
		text-transform: uppercase;
	}

	&:focus {
		outline: none;
	}
`
