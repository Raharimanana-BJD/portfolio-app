import type { FC } from 'react';
import { Typography } from '../ui/typography';

const Intro: FC = () => {
  return (
    <section className="section mt-12 md:mt-16 lg:mt-20">
      <div className="container pl-12">
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
