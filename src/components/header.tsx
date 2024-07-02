'use client';
import Image from 'next/image';

import { MortarBoardIcon } from '@/assets/icons';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-section">
      <Image src="/svg/logo.svg" alt="magicbot" width={112} height={26} />
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-md bg-white">
          <MortarBoardIcon width={32} height={32} className='fill-primary' />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
