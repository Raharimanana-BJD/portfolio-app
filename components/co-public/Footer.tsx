import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';

interface FooterProps {
  id: string;
  href: string;
  label: string;
}

export const footerData: FooterProps[] = [
  {
    id: '01',
    href: '#',
    label: 'Home',
  },
  {
    id: '02',
    href: '#',
    label: 'About',
  },
  {
    id: '03',
    href: '#',
    label: 'Projects',
  },
  {
    id: '04',
    href: '#',
    label: 'Blog',
  },
  {
    id: '05',
    href: '#',
    label: 'Contact',
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-accent-foreground text-accent pt-0">
      <div className="container">
        <div className="section px-4">
          <Typography
            variant={'h6'}
            className="text-accent inline-flex items-center gap-3 border-b-0 leading-tight font-normal"
          >
            <div className="aspect-square size-3 rounded-full bg-green-400" />
            <span className="text-nowrap">
              One spot available for next month
            </span>
          </Typography>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <Typography
                variant={'h2'}
                className="text-accent mt-8 border-b-0 leading-tight font-extralight"
              >
                Enough talk. Let&apos;s make something great together.
              </Typography>
              <Button
                size={'lg'}
                className="size-11 w-fit text-base"
                iconAfter={
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
                }
              >
                braharim@gmail.com
              </Button>
            </div>
            <div>
              <nav className="mt-6 flex flex-col gap-8 md:mt-0 md:items-end">
                {footerData.map(({ id, href, label }) => (
                  <Link href={href} key={id} className="text-lg uppercase">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <Typography
          variant={'small'}
          className="text-muted/30 py-6 text-center"
        >
          Copyright &copy; Braharim &bull; All rights reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
