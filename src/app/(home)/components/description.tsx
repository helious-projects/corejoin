'use client';

import { Text } from '@/shared/ui/kit/text';

export const Description = () => {
  return (
    <section className="px-[100px] py-10 max-md:px-4 max-md:py-10">
      <div className="w-[84%] max-md:w-full">
        <Text
          size="3xl"
          weight={300}
          className="max-md:text-lg max-md:font-normal"
        >
          At CoreJoin, we specialize in helping you connect with a brokerage
          that aligns with your unique trading goals, preferences, and risk
          profile.{' '}
          <span className="text-primary/50">
            Whether you’re seeking access to specific global markets, advanced
            trading tools, or cost-effective solutions, our expertise ensures
            you get matched with a broker that supports your success from day
            one.
          </span>{' '}
          You’ll make informed decisions and trade clearly and confidently with
          our guidance.
        </Text>
      </div>
    </section>
  );
};
