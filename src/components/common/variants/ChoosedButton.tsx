import { FC, memo } from 'react'
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
	jc?: string
	onClick?: () => void
}

export const ChoosedButton: FC<Props> = memo(
	({ variants = 'primary', text, link, jc = 'center', onClick }) => {
		const buttonText = link ? (
			<Link
				href={link}
				style={{
					textDecoration: 'none',
					color: 'inherit',
					display: 'flex',
					justifyContent: `${jc}`,
					alignItems: 'center',
					width: '100%',
				}}
			>
				{text}
			</Link>
		) : (
			text
		)

		let layout = {
			primary: { onClick: onClick },
			native: {
				bg: 'none',
				jc: 'flex-end',
				width: '100%',
				onClick: onClick,
			},
		}

		return <Button {...layout[variants]}>{buttonText}</Button>
	}
)

ChoosedButton.displayName = 'ChoosedButton'
