import styled from 'styled-components'

type ContainerForTextProps = {
	left?: string
}

export const ContainerForText = styled.div<ContainerForTextProps>`
	position: relative;
	left: ${(props) => props.left || '0'};
`