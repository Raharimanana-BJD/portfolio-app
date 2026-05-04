'use client';
import { hero as heroImage } from '@/app/assets';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, type FC } from 'react';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';

const Hero: FC = () => {
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ['start end', 'end start'],
  });
  const portraiWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);
  return (
    <section className="w-full max-md:mt-32">
      <div className="sticky top-0 grid grid-cols-1 items-stretch md:h-screen md:grid-cols-12">
        {/* Colonne Texte */}
        <div className="col-span-1 flex flex-col justify-center p-6 md:col-span-7 md:p-12 lg:p-20">
          <div className="max-w-4xl">
            <Typography
              variant={'h1'}
              className="text-5xl leading-tight font-normal"
            >
              Crafting digital experiences through code and creative design
            </Typography>
            <div className="isolate mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
              <Button
                size={'lg'}
                className="size-11 w-fit text-base"
                variant="outline"
                iconAfter={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                }
              >
                <span>View my work</span>
              </Button>
              <Button
                ripple={false}
                size={'lg'}
                className="size-11 w-fit text-base"
                variant="link"
              >
                Let&apos;s talk
              </Button>
            </div>
          </div>
        </div>

        {/* Colonne Image */}
        <div className="relative col-span-1 md:col-span-5">
          <motion.div
            className="mt-20 max-md:w-full! md:absolute md:right-0 md:mt-0 md:size-full"
            style={{
              width: portraiWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="Hero-image"
              priority
              loading="eager"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-[200vh] max-md:hidden" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;
