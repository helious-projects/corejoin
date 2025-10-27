'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <>
      <section className="relative flex h-[600px] max-md:flex-col">
        <div className="relative z-10 h-full w-[70%] max-md:absolute max-md:top-0 max-md:h-[342px] max-md:w-full">
          <Image src="/images/hero-1.png" alt="hero-1" fill unoptimized />
        </div>
        <div className="relative h-full w-[30%] overflow-hidden max-md:w-full">
          <Image
            src="/images/hero-2.jpg"
            alt="hero-2"
            className="!-top-[22%] !h-[150%] !w-[150%] object-cover"
            fill
            unoptimized
          />
        </div>
        <section className="absolute flex h-full w-full flex-col justify-between gap-[80px] px-[100px] py-10 max-md:justify-start max-md:px-4">
          <Image
            className="z-20"
            src="/logo.svg"
            alt="logo"
            width={134}
            height={23}
          />
          <div className="z-20 flex flex-col gap-6">
            <Title
              as="h1"
              className="w-[70%] text-[100px] leading-[100%] max-[1111px]:w-full max-md:text-[40px]"
              weight={400}
              color="white"
            >
              Navigate Global Markets with <br />
              <span className="text-black">CoreJoin</span>
            </Title>
            <Title
              as="h3"
              weight={400}
              color="white"
              size="2xl"
              className="max-md:text-base"
            >
              Find Your Fit in the Trading World
            </Title>
          </div>
        </section>
      </section>
    </>
  );
};

// const MobileHero = () => {
//   return (
//     <section className="hidden flex-col gap-10 px-4 py-10 max-md:flex">
//       <Text>Logo</Text>
//       <Title as="h1" color="black" weight={400}>
//         Navigate Global Markets with{' '}
//         <span className="text-primary font-semibold">CoreJoin</span>
//       </Title>
//       <Image
//         className="h-[200px] w-full object-cover"
//         src="/images/mob-hero.png"
//         alt="hero-2"
//         width={358}
//         height={200}
//         unoptimized
//       />
//     </section>
//   );
// };
