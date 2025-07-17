'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils/styles';
import { Title } from '@/shared/ui/kit/title';

const items = [
  { number: 1, value: 'Instant Execution' },
  { imgUrl: '/images/perf-1.png' },
  { number: 2, value: 'Support You Can Reach' },
  { imgUrl: '/images/perf-2.png' },
  { number: 3, value: 'Built-In Risk Management Tools' },
  { number: 4, value: 'Cost-Effective Spreads' },
  { number: 5, value: 'Trading With Leverage' },
  { number: 6, value: 'Global Market Availability' },
  { imgUrl: '/images/perf-3.png' },
];

export const PreferencesToPerfomance = () => {
  return (
    <section className="flex flex-col gap-10 px-[100px] py-[80px] max-md:px-4 max-md:py-10">
      <Title size="base">From Preferences to Performance</Title>
      <section className="flex flex-col gap-4">
        <CardsLayout>
          <Card
            className="w-1/2 max-md:w-full"
            number={items[0].number ?? 0}
            value={items[0].value ?? ''}
          />
          <Image
            className="!h-[230px] !w-[25%] rounded-[60px] object-cover max-md:!w-full"
            src={items[1].imgUrl ?? ''}
            alt={items[1].imgUrl ?? ''}
            width={304}
            height={230}
            unoptimized
          />
          <Card
            className="w-[25%] max-md:w-full"
            number={items[2].number ?? 0}
            value={items[2].value ?? ''}
          />
        </CardsLayout>
        <CardsLayout>
          <Image
            className="!h-[230px] !w-[50%] rounded-[60px] object-cover max-md:!w-full"
            src={items[3].imgUrl ?? ''}
            alt={items[3].imgUrl ?? ''}
            width={304}
            height={230}
            unoptimized
          />
          <Card
            className="w-[25%] max-md:w-full"
            number={items[4].number ?? 0}
            value={items[4].value ?? ''}
          />
          <Card
            className="w-[25%] max-md:w-full"
            number={items[5].number ?? 0}
            value={items[5].value ?? ''}
          />
        </CardsLayout>
        <CardsLayout>
          <Card
            className="w-[25%] max-md:w-full"
            number={items[6].number ?? 0}
            value={items[6].value ?? ''}
          />
          <Card
            className="w-[25%] max-md:w-full"
            number={items[7].number ?? 0}
            value={items[7].value ?? ''}
          />
          <Image
            className="!h-[230px] !w-[50%] rounded-[60px] object-cover max-md:!w-full"
            src={items[8].imgUrl ?? ''}
            alt={items[8].imgUrl ?? ''}
            width={304}
            height={230}
            unoptimized
          />
        </CardsLayout>
      </section>
    </section>
  );
};

const Card = ({
  number,
  value,
  className,
}: {
  number: number;
  value: string;
  className?: string;
}) => (
  <article
    className={cn(
      'flex h-[230px] flex-col justify-between rounded-2xl bg-[rgba(147,147,147,0.10)] p-10 max-md:h-[180px]',
      className,
    )}
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
      <Title as="p" color="primary" size="base" weight={400}>
        0{number}
      </Title>
    </span>
    <Title as="h4" color="black" weight={400} size="2xl">
      {value}
    </Title>
  </article>
);

const CardsLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-4 max-md:flex-col">{children}</div>
);
