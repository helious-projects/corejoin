'use client';

import { type JSX, useState } from 'react';
import Image from 'next/image';

import { useWindowSize } from '@/shared/lib/hooks/use-window-size';
import { cn } from '@/shared/lib/utils/styles';
import { BrowserIcon } from '@/shared/ui/icons/browser';
import { LineUpIcon } from '@/shared/ui/icons/line-up';
import { TwoCirclesIcon } from '@/shared/ui/icons/two-circles';
import { WalletIcon } from '@/shared/ui/icons/wallet-icon';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const items = [
  {
    icon: BrowserIcon,
    title: 'Market Freedom',
    description:
      'Gain real-time access to global financial markets and uncover new opportunities with advanced tools designed for international reach.',
    benefitsTitle: 'Key benefits include:',
    benefits: [
      'Live market analysis across multiple regions',
      'Screening tools for undervalued assets',
      'Centralized dashboard for multi-market monitoring',
      'Streamlined navigation between different exchanges',
    ],
  },
  {
    icon: TwoCirclesIcon,
    title: 'Universal Trading Access',
    description:
      'Trade various financial instruments across borders from one secure, intuitive platform.',
    benefitsTitle: 'What you can access:',
    benefits: [
      'Stocks, futures, currencies, ETFs, and more',
      'Trading opportunities across Europe, Asia, the Americas, and beyond',
      'Unified interface that supports cross-border trading',
      'Stay in control - anytime, anywhere',
    ],
  },
  {
    icon: WalletIcon,
    title: 'Currency Convenience',
    description:
      'Easily manage multi-currency portfolios with seamless funding and conversions.',
    benefitsTitle: 'Enjoy:',
    benefits: [
      'Deposits and withdrawals in over 20 international currencies',
      'Real-time currency conversion with competitive exchange rates',
      'Cross-asset trading without currency constraints',
      'Simplified treasury management for global traders',
    ],
  },
  {
    icon: LineUpIcon,
    title: 'Technology That Empowers You',
    description:
      'Boost your performance with cutting-edge tools and insights designed for new and experienced traders.',
    benefitsTitle: 'Included features:',
    benefits: [
      'Market Research & Updates – Stay ahead with the latest news and data-driven insights',
      'Custom Trading Interfaces – Tailor your workspace to suit your workflow and preferences',
      'Multiple Order Execution Types – Benefit from flexible order strategies, including limit, stop, and conditional orders',
    ],
  },
];

export const WhatIncluded = () => {
  const { width } = useWindowSize();

  return (
    <section className="bg-[rgba(241,249,252,0.70)] px-[100px] min-[1800]:px-[250px] pt-[80px] max-md:px-4">
      <section className="relative flex h-[670px] flex-col justify-between rounded-[14px] px-10 py-6 max-md:h-max max-md:gap-10">
        <Title size="4xl" weight={400} className="z-20">
          What’s Included with CoreJoin
        </Title>
        <div className="z-20 flex gap-3 max-md:flex-col">
          {width > 768
            ? items.map(item => <Card key={item.title} {...item} />)
            : items.map(item => <MobileCard key={item.title} {...item} />)}
        </div>
        <Image
          className="z-0 rounded-[14px] bg-[lightgray] bg-cover bg-[50%] bg-no-repeat object-cover backdrop-blur-[15px]"
          src="/images/abstract-ice.jpg"
          alt="abstract-ice"
          fill
          unoptimized
        />
      </section>
    </section>
  );
};

const MobileCard = ({
  benefits,
  benefitsTitle,
  description,
  icon: Icon,
  title,
}: {
  icon: () => JSX.Element;
  title: string;
  description: string;
  benefitsTitle: string;
  benefits: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        'flex flex-1 flex-col gap-2.5 rounded-sm border-t border-white px-4 py-6 text-left transition duration-300 ease-in-out',
        isOpen && 'bg-white',
      )}
    >
      <Icon />
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Title as="h4" weight={400} size="xl">
            {title}
          </Title>
          <Text
            className={cn(
              'text-black/50 transition duration-300 ease-in-out',
              isOpen && 'text-black',
            )}
          >
            {description}
          </Text>
        </div>
        <div
          className={cn(
            'hidden flex-col transition duration-300 ease-in-out',
            isOpen && 'flex text-black',
          )}
        >
          <Text>{benefitsTitle}</Text>
          <ul className="list-disc pl-4">
            {benefits.map(benefit => (
              <li key={benefit}>
                <Text>{benefit}</Text>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </button>
  );
};

const Card = ({
  benefits,
  benefitsTitle,
  description,
  icon: Icon,
  title,
}: {
  icon: () => JSX.Element;
  title: string;
  description: string;
  benefitsTitle: string;
  benefits: string[];
}) => (
  <article className="group flex flex-1 flex-col gap-2.5 rounded-sm border-t border-white px-4 py-6 transition duration-300 ease-in-out hover:bg-white">
    <Icon />
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Title as="h4" weight={400} size="xl">
          {title}
        </Title>
        <Text className="text-black/50 transition duration-300 ease-in-out group-hover:text-black">
          {description}
        </Text>
      </div>
      <div className="flex-col opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <Text>{benefitsTitle}</Text>
        <ul className="list-disc pl-4">
          {benefits.map(benefit => (
            <li key={benefit}>
              <Text>{benefit}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </article>
);
