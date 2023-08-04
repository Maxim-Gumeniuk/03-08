import { FC, memo } from 'react'
import { Text } from '@/styled/common/Text'
import { COLORS } from '../../../types/enums/styles/colors'
import { FONT_SIZE } from '../../../types/enums/styles/font_size'
import { FONT_WEIGHT } from '../../../types/enums/styles/font-weight'

enum Variants {
	primary = 'primary',
	title = 'title',
	error = 'error',
}

type Props = {
	variants: keyof typeof Variants
	text?: string
	upperCase?: boolean
}

export const ChoosedText: FC<Props> = memo(({ variants, text, upperCase }) => {
	let layout = {
		primary: {
			color: COLORS.WHITE,
			size: FONT_SIZE.MEDIUM,
			weight: FONT_WEIGHT.MEDIUM,
			upperCase: upperCase,
		},
		title: {
			color: COLORS.WHITE,
			size: FONT_SIZE.EXTRA,
			weight: FONT_WEIGHT.MEDIUM,
			upperCase: upperCase,
		},
		error: {
			color: COLORS.DARK_RED,
			size: FONT_SIZE.SMALL,
			weight: FONT_WEIGHT.MEDIUM,
			upperCase: upperCase,
		},
	}

	return <Text {...layout[variants]}>{text}</Text>
})

ChoosedText.displayName = 'ChoosedText'
