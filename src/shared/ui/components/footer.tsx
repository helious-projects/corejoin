'use client';

import Image from 'next/image';

import { ContactForm } from '@/features/contact-form/ui/form';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Footer = () => {
  return (
    <footer className="relative bg-[rgba(241,249,252,0.70)] px-[100px] pt-[100px] max-md:px-4 max-md:pt-[60px]">
      <section className="flex flex-col gap-[100px] pb-[200px] max-md:pb-[80px]">
        <section className="flex gap-[60px] max-md:flex-col">
          <div className="z-10 flex w-1/2 flex-col gap-4 max-md:w-full">
            <Title size="5xl" weight={400}>
              Need personalized guidance or have specific questions?
            </Title>
            <Text size="base" weight={300}>
              Fill out the form below and let us know how we can assist you.
              Whether you’re exploring broker options, seeking clarity on market
              access, or simply want expert input — our team is ready to provide
              tailored support based on your trading goals.
            </Text>
          </div>
          <section className="w-1/2 max-md:w-full">
            <ContactForm />
          </section>
        </section>
        <Text>Logo</Text>
      </section>
      <Image
        className="absolute !top-auto right-0 bottom-0 left-0 z-0 !h-[450px] !w-full max-md:!h-[150px]"
        src="/images/footer.png"
        alt="footer"
        fill
        unoptimized
      />
    </footer>
  );
};
