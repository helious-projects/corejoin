'use client';

import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/styles';

export const Button = ({
  className,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      'flex w-max cursor-pointer items-center gap-2 bg-white p-[2px] text-black transition duration-300 ease-in-out outline-none hover:opacity-70',
      className,
    )}
    {...args}
  />
);
