import type { FC } from 'react';
import { Typography } from '../ui/typography';

const Intro: FC = () => {
  return (
    <section className="mt-12 py-24 md:mt-16 md:pt-32 lg:mt-20 lg:py-32">
      <div className="container lg:px-20">
        <Typography
          variant={'h2'}
          className="leading-tight font-normal lg:w-[80%]"
        >
          Building beautiful website with clean code and thoughtful design to{' '}
          help your business grow and stand out online
        </Typography>
      </div>
    </section>
  );
};

export default Intro;
