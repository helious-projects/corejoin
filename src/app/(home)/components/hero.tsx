'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <>
      <section className="relative flex h-[600px] max-md:hidden">
        <div className="relative h-full w-1/2">
          <Image src="/images/hero-1.png" alt="hero-1" fill unoptimized />
        </div>
        <div className="relative h-full w-1/2 overflow-hidden">
          <Image
            src="/images/hero-2.png"
            alt="hero-2"
            className="!-top-[22%] !h-[150%] !w-[150%] object-cover"
            fill
            unoptimized
          />
        </div>
        <section className="absolute flex h-full w-full flex-col justify-between px-[100px] py-10 max-md:px-4">
          <Text>Logo</Text>
          <div className="flex flex-col gap-6">
            <Title as="h1" weight={400} color="white">
              Navigate Global Markets with <br />
              <span className="font-semibold">CoreJoin</span>
            </Title>
            <Title as="h3" weight={400} color="white" size="base">
              Find Your Fit in the Trading World
            </Title>
          </div>
        </section>
      </section>
      <MobileHero />
    </>
  );
};

const MobileHero = () => {
  return (
    <section className="hidden flex-col gap-10 px-4 py-10 max-md:flex">
      <Text>Logo</Text>
      <Title as="h1" color="black" weight={400}>
        Navigate Global Markets with{' '}
        <span className="text-primary font-semibold">CoreJoin</span>
      </Title>
      <Image
        className="h-[200px] w-full object-cover"
        src="/images/mob-hero.png"
        alt="hero-2"
        width={358}
        height={200}
        unoptimized
      />
    </section>
  );
};
