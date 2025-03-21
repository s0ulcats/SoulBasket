import type { LucideIcon } from 'lucide-react'
import type { PropsWithChildren, ReactNode } from 'react'
import type { IconType } from 'react-icons'

import { cn } from '@/utils/tw-merge'

import { Card } from '../common/Card'

interface CardContainerHeaderProps {
	Icon?: IconType | LucideIcon
	isRightContentFull?: boolean
	rightContent?: ReactNode
}

export default function CardContainerHeader({
	Icon,
	isRightContentFull,
	rightContent,
	children
}: PropsWithChildren<CardContainerHeaderProps>) {
	return (
			<div >
				{rightContent && (
					<div>
						{rightContent}
					</div>
				)}
			</div>
	)
}
