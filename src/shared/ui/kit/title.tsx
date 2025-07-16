'use client';

import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';

const titleVariants = cva(
  'transition duration-300 ease-in-out font-ibm-plex-mono leading-[120%]',
  {
    variants: {
      size: {
        sm: 'text-sm',
        base: 'text-base',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-[40px] max-md:text-[24px]',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl max-md:text-[40px]',
      },
      color: {
        black: 'text-black',
        white: 'text-white',
        primary: 'text-primary',
      },
      weight: {
        400: 'font-normal',
        500: 'font-medium',
        600: 'font-semibold',
        700: 'font-bold',
      },
    },
    defaultVariants: {
      size: '6xl',
      color: 'black',
      weight: 600,
    },
  },
);

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  color,
  weight,
  size,
  as = 'h2',
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(titleVariants({ color, weight, size }), className)}>
      {children}
    </Tag>
  );
};
