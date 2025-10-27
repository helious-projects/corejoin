'use client';

import Image from 'next/image';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
  Trigger,
} from '@radix-ui/react-dialog';

import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

export const ThankYouDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="animate-overlayShow fixed inset-0 z-[998] bg-black/10 backdrop-blur-sm" />
        <Content
          className="animate-contentShow fixed top-1/2 left-1/2 z-[999] h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-2xl bg-white focus:outline-none max-lg:h-[589px] max-lg:w-[96%]"
          onCloseAutoFocus={e => e.preventDefault()}
        >
          <DTitle />
          <Description asChild>
            <section className="relative flex h-full flex-col gap-[60px] rounded-2xl bg-white p-10">
              <section className="flex w-[70%] flex-col gap-6 max-md:w-full">
                <Title as="h3" size="4xl" weight={400}>
                  Thanks for reaching out to CoreJoin
                </Title>
                <Title
                  as="p"
                  size="sm"
                  weight={400}
                  className="z-10 leading-[120%] text-black/50"
                >
                  We’ve received your request, and our specialists are already
                  on it. Expect to hear from us within the next 10 minutes —
                  we’re here to match you with the right broker and guide you
                  with clarity and confidence. <br />
                  <br />
                  🔍 Next Step: Sit back and let us do the searching. <br />
                  💡 Our Goal: Making your trading decisions smarter, faster,
                  and easier. <br />
                  <br />
                  Your journey just got a Core-level upgrade.
                </Title>
              </section>
              <Image
                className="absolute !top-20 !-right-40 bottom-0 !left-auto !h-[500px] !w-[833px]"
                src="/images/dialog-phone.png"
                alt="dialog-bg"
                fill
                unoptimized
              />
              <Close asChild>
                <Button>
                  Close <ArrowRightIcon />
                </Button>
              </Close>
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
