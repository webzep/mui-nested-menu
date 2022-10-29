import React from 'react';
import { Surface, Flex } from 'themestress/components';

interface SampleBoxProps {
	children?: React.ReactNode;
	contrast?: boolean;
}

export const SampleBox: React.FC<SampleBoxProps> = ({
	children,
	contrast,
	...props
}: SampleBoxProps) => {
	return (
		<Surface
			variant='outlined'
			padding={6}
			radius={4}
			bgColor={contrast ? 'var(--sys-color-inverse-on-surface)' : ''}
			{...props}
		>
			<Flex justifyContent='space-around' {...props}>
				{children}
			</Flex>
		</Surface>
	);
};
