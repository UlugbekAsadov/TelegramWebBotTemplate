import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { IPaymentMethod } from '@/lib/interfaces/checkout.interface';
import { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  method: IPaymentMethod;
  isActive: boolean;
}

export const PaymentMethod = ({ method, isActive, className, ...props }: IProps) => {
  return (
    <div
      className={twMerge(
        `h-[89px] w-full cursor-pointer rounded-xl bg-gray-200 border-2 border-gray-200 flex items-center justify-center`,
        isActive && 'bg-white border-primary',
        className
      )}
      {...props}
    >
      <Image src={method.logo} alt={method.name} width={63} height={40} />
    </div>
  );
};
