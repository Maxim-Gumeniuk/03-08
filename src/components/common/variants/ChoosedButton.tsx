import { FC } from 'react'
import { Button } from '../../../styled/common/Button'
import Link from 'next/link'

enum Variants {
	primary = 'primary',
	native = 'native',
}

type Props = {
	variants?: keyof typeof Variants
	text?: string
	link?: string
}

export const ChoosedButton: FC<Props> = ({
	variants = 'primary',
	text,
	link,
}) => {
	const buttonText = link ? (
		<Link href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
			{text}
		</Link>
	) : (
		text
	)
	let layout = {
		primary: <Button>{buttonText}</Button>,
		native: (
			<Button bg="none" jc={'flex-end'} width="100%">
				{buttonText}
			</Button>
		),
	}
	return layout[variants]
}
