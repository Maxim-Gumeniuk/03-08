import { FC } from 'react'
import { Text } from '@/styled/common/Text'
import { COLORS } from '../../enum/colors'
import { FONT_SIZE } from '../../enum/font_size'
import { FONT_WEIGHT } from '../../enum/font-weight'

enum Variants {
	primary = 'primary',
	title = 'title',
}

type Props = {
	variants: keyof typeof Variants
	text: string
	upperCase?: boolean
}

export const ChoosedText: FC<Props> = ({ variants, text, upperCase }) => {
	let layout = {
		primary: (
			<Text
				color={COLORS.WHITE}
				size={FONT_SIZE.MEDIUM}
				weight={FONT_WEIGHT.MEDIUM}
				upperCase={upperCase}
			>
				{text}
			</Text>
		),
		title: (
			<Text
				color={COLORS.WHITE}
				size={FONT_SIZE.EXTRA}
				weight={FONT_WEIGHT.MEDIUM}
				upperCase={upperCase}
			>
				{text}
			</Text>
		),
	}

	return layout[variants]
}
