import { IPaymentMethod } from '@/lib/interfaces/checkout.interface';

export const paymentMethods: IPaymentMethod[] = [
  {
    id: 1,
    logo: '/svg/click.svg',
    name: 'click',
  },
  {
    id: 2,
    logo: '/svg/payme.svg',
    name: 'payme',
  },
];
