'use client';

import { cookie } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex h-14 justify-center bg-neutral-900'>
      <div id='header-content' className='flex justify-between text-center'>
        <div className={`${cookie.className} text-3xl`}>Spacetagram</div>
        <div id='header-logo' className='flex justify-center text-center'>
          <Link
            href='https://www.linkedin.com/in/daniel-bentz-1682b137/'
            target='_blank'
          >
            <Image
              src='/LI-In-Bug.png'
              alt='Linkedin logo'
              width='30'
              height='30'
            ></Image>
          </Link>
          <Link href='https://github.com/bentz19u/spacetagram' target='_blank'>
            <Image
              src='/github-mark-white.svg'
              alt='Git hub logo'
              width='25'
              height='25'
            ></Image>
          </Link>
        </div>
      </div>
    </header>
  );
}
