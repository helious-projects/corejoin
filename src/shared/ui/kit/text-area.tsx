'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/styles';
import { DotStarIcon } from '@/shared/ui/icons/dot-star';

const textAreaVariants = cva(
  'text-base px-4 w-full z-20 h-[120px] max-lg:w-full font-ibm-plex-mono flex items-center justify-between py-1 border-b border-black font-normal text-black/25 bg-transparent transition-all duration-300 focus:outline-none',
  {
    variants: {
      intent: {
        primary: '',
        danger: 'border-danger',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
);

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  intent,
  required,
  value,
  ...args
}: InputHTMLAttributes<HTMLTextAreaElement> & TextAreaVariants) => {
  return (
    <label className={cn(textAreaVariants({ intent }), className)}>
      <textarea
        className="h-full w-full resize-none bg-transparent outline-none"
        required={required}
        value={value}
        {...args}
      />
      {required && !value && <DotStarIcon />}
    </label>
  );
};
