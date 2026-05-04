import { avatar1, avatar2, avatar3, avatar4 } from '@/app/assets';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';

interface TestimonialsProps {
  id: string;
  company: string;
  role: string;
  name: string;
  quote: string;
  image: StaticImageData;
  imagePositionY: number; //number float 0.2 et 0.1 et 0.55
}

const TestimonialsData: TestimonialsProps[] = [
  {
    id: '1',
    company: 'TechStart Inc',
    role: 'Product Manager',
    name: 'Sarah Johnson',
    quote:
      'Working with this developer was exceptional. They delivered a clean, scalable solution ahead of schedule.',
    image: avatar1,
    imagePositionY: 0.2,
  },
  {
    id: '2',
    company: 'Digital Solutions Co',
    role: 'CTO',
    name: 'Michael Chen',
    quote:
      'The attention to detail and commitment to excellence made all the difference in our project success.',
    image: avatar2,
    imagePositionY: 0.55,
  },
  {
    id: '3',
    company: 'Creative Agency X',
    role: 'Design Lead',
    name: 'Emma Rodriguez',
    quote:
      'Best collaboration ever. The developer understood our vision and brought it to life beautifully.',
    image: avatar3,
    imagePositionY: 0.1,
  },
  {
    id: '4',
    company: 'Startup Hub',
    role: 'Founder',
    name: 'Alex Thompson',
    quote:
      'Reliable, professional, and truly passionate about their work. I highly recommend their services.',
    image: avatar4,
    imagePositionY: 0.3,
  },
];

const Testimonials: FC = () => {
  const testimonialsIndex = 0;
  return (
    <section className="section">
      <Typography
        variant={'h2'}
        className="flex flex-col overflow-hidden border-b-0 leading-tight font-normal"
      >
        <span className="whitespace-nowrap">
          Some nice words from my past clients
        </span>
        <span className="text-primary self-end whitespace-nowrap">
          Some nice words from my past clients
        </span>
      </Typography>
      <div className="container">
        <div className="mt-20">
          {TestimonialsData.map(
            (
              { id, role, name, quote, company, image, imagePositionY },
              index
            ) =>
              index === testimonialsIndex && (
                <div
                  key={id}
                  className="grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16"
                >
                  <div className="relative aspect-square md:col-span-2 md:aspect-6/5">
                    <Image
                      src={image}
                      alt={`${name} image`}
                      loading="eager"
                      style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
                      className="size-full object-cover"
                    />
                  </div>
                  <blockquote className="md:col-span-3 md:mt-0">
                    <div className="mt-8 text-3xl">
                      <span className="text-inherit">&ldquo;</span>
                      <Typography variant={'h3'} className="">
                        {quote}
                      </Typography>
                      <span className="text-inherit">&rdquo;</span>
                    </div>
                    <cite className="mt-4 text-lg not-italic md:mt-8 lg:text-xl">
                      {name}, {role} at {company}
                    </cite>
                  </blockquote>
                </div>
              )
          )}
        </div>
        <div className="mt-6 flex gap-4 lg:mt-10">
          <Button
            size={'icon'}
            variant={'outline'}
            className="border-border inline-flex size-11 items-center justify-center rounded-full border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12H18"
              />
            </svg>
          </Button>
          <Button
            variant={'outline'}
            size={'icon'}
            className="border-border inline-flex size-11 items-center justify-center rounded-full border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
