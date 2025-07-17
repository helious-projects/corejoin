'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = () => {
  return (
    <section className="flex px-[100px] py-[80px] max-md:flex-col max-md:px-4 max-md:pb-10">
      <div className="w-[40%] max-md:w-full">
        <SliderImp />
      </div>
      <ImageBox />
    </section>
  );
};

const items = [
  {
    title: 'Save Your Hours',
    text: 'Interviewing brokers one by one can take too long. Our service gives you reliable options, saving you the hassle.',
  },
  {
    title: 'Save Your Capital',
    text: 'With our help, you won’t overpay due to lack of experience. We help you secure better deals – meaning more funds stay in your account.',
  },
  {
    title: 'Leverage Professional Know-How',
    text: 'Our broker discovery team thoroughly knows the market landscape. With CoreJoin’s help, you’ll understand what kind of broker fits your experience and strategy best.',
  },
];

const SLIDE_DURATION = 5000;

export const SliderImp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, SLIDE_DURATION / 50);

    const timeout = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <section className="flex w-full flex-col">
      <div className="mb-6 flex gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className="relative h-1 rounded"
            style={{
              width: i === activeIndex ? '100%' : '30px',
              backgroundColor: i === activeIndex ? '#1359594D' : '#135959',
              transition: 'width 0.3s ease',
            }}
          >
            <div
              className="absolute top-0 left-0 h-full rounded bg-[#135959] transition-all duration-100 ease-linear"
              style={{
                width: i === activeIndex ? `${progress}%` : '0%',
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <SliderItem
            key={item.title}
            active={activeIndex === i}
            {...item}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

const SliderItem = ({
  text,
  title,
  active,
  onClick,
}: {
  title: string;
  text: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    className="flex cursor-pointer flex-col gap-2 border-b border-[rgba(19,89,89,0.50)] py-4 text-left last:border-b-0"
    onClick={onClick}
  >
    <Title size="4xl" weight={400}>
      {title}
    </Title>
    <span className={cn('hidden', active && 'block')}>
      <Text size="base">{text}</Text>
    </span>
  </button>
);

const ImageBox = () => (
  <div className="w-[60%] max-md:w-full">
    <Image
      className="h-[550px] w-full max-md:h-[250px]"
      src="/images/transparent-box.png"
      alt="slider-image"
      width={500}
      height={500}
      unoptimized
    />
  </div>
);
