import type { FC } from 'react';

import { project1, project2, project3, project4 } from '@/app/assets';
import Image, { type StaticImageData } from 'next/image';
import { Typography } from '../ui/typography';

interface projectItemsProps {
  id: string;
  name: string;
  image: StaticImageData;
  url: string;
}

const projectItems: projectItemsProps[] = [
  {
    id: '01',
    name: 'Project 1',
    image: project1,
    url: '#',
  },
  {
    id: '02',
    name: 'Project 2',
    image: project2,
    url: '#',
  },
  {
    id: '03',
    name: 'Project 3',
    image: project3,
    url: '#',
  },
  {
    id: '04',
    name: 'Project 4',
    image: project4,
    url: '#',
  },
];

const Project: FC = () => {
  return (
    <section>
      <div className="container p-12 md:py-32 lg:py-40">
        <Typography variant={'h2'} className="leading-tight font-normal">
          Select works
        </Typography>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projectItems.map(({ name, image, id, url }) => (
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a
              key={id}
              href={url}
              className="border-border flex flex-col border-t border-dotted py-6 last:border-b md:py-8 lg:py-10"
            >
              <div>
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} image`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-8 flex items-center justify-between md:mt-0">
                  <Typography variant={'h3'}>{name}</Typography>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
