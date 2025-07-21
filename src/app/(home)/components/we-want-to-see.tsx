'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WeWantToSee = () => {
  return (
    <section className="bg-[rgba(241,249,252,0.70)] px-[100px] pt-6 max-md:px-4">
      <section className="relative flex h-[400px] flex-col">
        <Image
          className="z-0 rounded-[14px] object-cover"
          src="/images/we-want-to-see.jpg"
          alt="we-want-to-see"
          fill
          unoptimized
        />
        <section className="z-10 ml-auto flex h-full w-1/2 flex-col justify-between p-10 max-lg:w-full">
          <div className="flex flex-col gap-2">
            <Title size="4xl" weight={400}>
              We Want to See You Win
            </Title>
            <Text size="base">
              Success starts with the right partner – choose a brokerage that
              gets you there. CoreJoin is here to ensure you land on the right
              side – with safety, support, and strategy all aligned.
            </Text>
          </div>
          <Title
            size="4xl"
            as="h3"
            weight={700}
            className="leading-[100%] tracking-[-2.4px]"
          >
            When you succeed,
            <br /> we succeed.
          </Title>
        </section>
      </section>
    </section>
  );
};
