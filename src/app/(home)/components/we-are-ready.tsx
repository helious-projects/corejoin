'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const WeAreReady = () => {
  return (
    <section className="flex flex-col gap-8 px-[100px] min-[1800]:px-[250px] pt-10 pb-20 max-md:px-4 max-md:py-10">
      <Title size="base" weight={400}>
        We’re Ready When You Are
      </Title>
      <section className="flex gap-8 max-md:flex-col">
        <DependableSolutions />
        <EliteAccess />
      </section>
    </section>
  );
};

const DependableSolutions = () => (
  <article className="relative flex h-[600px] w-1/2 flex-col overflow-hidden rounded-2xl bg-[rgba(147,147,147,0.10)] p-10 max-xl:h-[700px] max-md:h-[400px] max-md:w-full max-md:p-6">
    <Image
      className="!-top-[6%] !right-0 !left-auto !h-[410px] !w-[490px] max-md:!-top-[18%] max-md:!h-[210px] max-md:!w-[250px]"
      src="/images/colbs.png"
      alt="colbs"
      fill
      unoptimized
    />
    <section className="mt-auto flex flex-col gap-2.5">
      <Title as="h3" size="4xl" weight={400}>
        Dependable Solutions
      </Title>
      <Text color="primary" size="base" weight={600}>
        Your reliable broker-matching ally
      </Text>
      <Title as="p" size="sm" weight={400} color="black" className="opacity-60">
        CoreJoin simplifies the broker discovery process. We suggest handpicked
        brokerage firms based on deep market insights and real-world testing.
        Before making your move, you’ll know what sets each apart – including
        their strengths and potential limitations.
      </Title>
    </section>
  </article>
);

const EliteAccess = () => (
  <article className="relative flex h-[600px] w-1/2 flex-col overflow-hidden rounded-2xl border border-black p-10 max-xl:h-[700px] max-md:h-[400px] max-md:w-full max-md:p-6">
    <section className="flex flex-col gap-2.5">
      <Title as="h3" size="4xl" weight={400}>
        Elite Broker Access
      </Title>
      <Text color="primary" size="base" weight={600}>
        The effective route to your next broker
      </Text>
      <Title as="p" size="sm" weight={400} color="black" className="opacity-60">
        Evaluating brokerage platforms can feel overwhelming. CoreJoin considers
        every key aspect – platform usability, cost structure, and support – to
        help you choose the most beneficial partner.
      </Title>
    </section>
    <Image
      className="!inset-auto !-bottom-[10%] !left-1/2 !h-[430px] !w-[580px] !-translate-x-1/2 max-md:!h-[200px] max-md:!w-[300px]"
      src="/images/user.png"
      alt="colbs"
      fill
      unoptimized
    />
  </article>
);
