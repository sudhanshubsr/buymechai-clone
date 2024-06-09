'use client';

import useCurrentPage from '@/hooks/useCurrentPage';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { CiHeart as HeartIcon } from 'react-icons/ci';
import { Button } from './ui/button';

export const HeaderComponent: FunctionComponent = () => {
  const buttonClasses =
    'hover:bg-[--primary-foreground] px-4 rounded-full tracking-widest transform hover:scale-105 transition-color duration-150 ease-in-out font-CircularStdMedium';

  const currentPage = useCurrentPage();

  return (
    <header className="grid grid-cols-3 items-center">
      <div className="flex gap-1 items-center">
        <Link href="/FAQ">
          <Button
            aria-current={currentPage === 'faq' ? 'page' : undefined}
            className={`${buttonClasses} ${currentPage === 'faq' ? 'bg-[--primary-foreground]' : ''}`}
          >
            FAQ
          </Button>
        </Link>
        <Link href="/reviews">
          <Button
            aria-current={currentPage === 'reviews' ? 'page' : undefined}
            className={`${buttonClasses} ${currentPage === 'reviews' ? 'bg-[--primary-foreground]' : ''}`}
          >
            <div className="flex items-center">
              Wall of <HeartIcon className="w-5 h-5 ml-1" />
            </div>
          </Button>
        </Link>
      </div>

      <div className="mx-auto">
        <Link href="/">
          <Image
            src="https://imagesprojects.s3.ap-south-1.amazonaws.com/buymeachai/siteheaderlogomain1.png"
            alt="header-logo"
            width={180}
            height={40}
            className="object-cover"
          />
        </Link>
      </div>

      <div className="flex justify-end gap-4">
        <Link href="/login">
          <Button className={`${buttonClasses}`}>Log in</Button>
        </Link>
        <Link href="/signup">
          <Button className={`bg-[--primary] hover:bg-[--primary] px-4 rounded-full tracking-widest transform hover:scale-105 transition-color duration-150 ease-in-out font-CircularStdMedium`}>Sign up</Button>
        </Link>
      </div>
    </header>
  );
};
