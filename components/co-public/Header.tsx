'use client';

import { motion, useAnimate } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, type FC } from 'react';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';

interface HeaderProps {
  id: string;
  href: string;
  label: string;
}

export const headerData: HeaderProps[] = [
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

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnime] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
      navAnime(
        navScope.current,
        {
          height: '100%',
        },
        { duration: 0.7 }
      );
      navAnime(
        navScope.current,
        { height: '100%' },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimate([
        [topLineScope.current, { translateY: 0 }],
        [topLineScope.current, { rotate: 0 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: 0 }],
        [bottomLineScope.current, { rotate: 0 }],
      ]);
      navAnime(navScope.current, { height: 0 });
    }
  }, [
    isOpen,
    topLineScope,
    topLineAnimate,
    bottomLineScope,
    bottomLineAnimate,
    navAnime,
    navScope,
  ]);
  return (
    <header>
      <div
        ref={navScope}
        className="bg-accent-foreground fixed top-0 left-0 z-50 h-0 w-full overflow-hidden"
      >
        <nav className="text-accent mt-20 flex flex-col">
          {headerData.map(({ id, href, label }) => (
            <Link
              href={href}
              key={id}
              className="border-muted-foreground/30 group/nav-item relative isolate border-t py-4 uppercase last:border-b md:py-8"
              onClick={() => setIsOpen(false)}
            >
              <div className="container flex items-center justify-between">
                <span className="text-3xl transition-all duration-500 group-hover/nav-item:pl-4">
                  {label}
                </span>
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
              <div className="bg-muted-foreground/30 absolute bottom-0 left-0 -z-10 h-0 w-full transition-all duration-500 group-hover/nav-item:h-full" />
            </Link>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 z-50 w-full mix-blend-difference backdrop-blur-md">
        <div className="container max-w-full!">
          <div className="flex h-20 items-center justify-between">
            <div>
              <Link href="/">
                <Typography
                  variant="h4"
                  className="text-accent font-bold uppercase"
                >
                  Braharim
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 z-50 w-full">
        <div className="container max-w-full!">
          <div className="flex h-20 items-center justify-end">
            <div className="flex items-center gap-4">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="border-border bg-muted inline-flex size-11 items-center justify-center rounded-full border"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x={3}
                    y={7}
                    width={18}
                    height={2}
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: '12px 8px',
                    }}
                  />
                  <motion.rect
                    x={3}
                    y={15}
                    width={18}
                    height={2}
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: '12px -16px',
                    }}
                  />
                </svg>
              </div>
              <Button
                size={'lg'}
                variant={'default'}
                ripple={true}
                className="hidden items-center text-base md:inline-flex"
              >
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
