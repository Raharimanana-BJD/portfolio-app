import Link from 'next/link';
import type { FC } from 'react';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md">
      <div className="container max-w-full md:px-12 lg:px-20">
        <div className="flex h-20 items-center justify-between">
          <div>
            <Link href="/">
              <Typography variant="h4" className="font-bold uppercase">
                Braharim
              </Typography>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="border-border bg-muted inline-flex size-11 items-center justify-center rounded-full border">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={3} y={15} width={18} height={2} fill="currentColor" />
                <rect x={3} y={7} width={18} height={2} fill="currentColor" />
              </svg>
            </div>
            <Button
              size={'lg'}
              variant={'default'}
              ripple={true}
              className="hidden items-center md:inline-flex"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
