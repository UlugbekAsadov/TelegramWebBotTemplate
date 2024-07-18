'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { CheckoutBuyButton } from '@/components/checkout/buy-button';
import { PaymentMethods } from '@/components/checkout/payment-methods/payment-methods';
import { MyCourseCard } from '@/components/courses/course-card/my-course-card/my-course-card';
import { useLocaleContext } from '@/context/locale.context';
import { IPaymentMethod } from '@/lib/interfaces/checkout.interface';
import { ISingleCourse } from '@/lib/interfaces/course.interface';
import { paymentMethods } from '@/lib/mock/payment.method.mock';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';

interface IProps {
  courseId: string;
}

export const CheckoutPage = ({ courseId }: IProps) => {
  const { t } = useLocaleContext();
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<IPaymentMethod>(paymentMethods[0]);
  const courseQuery = useQuery<ISingleCourse>({
    queryKey: ['course', courseId],
    queryFn: () => getCourseQueryFn(courseId),
  });

  if (!courseQuery.isLoading && !courseQuery.data) {
    router.push('/404');
    return;
  }

  const createOrder = async () => {
    router.push(`/checkout/${courseId}/success`);
  };

  return (
    <div className="p-section min-h-dvh">
      <h2 className="text-foreground text-2xl font-semibold">{t('checkout.payment')}</h2>
      <MyCourseCard course={courseQuery.data as ISingleCourse} isBought={false} className="mt-4" />
      <PaymentMethods
        selectedPaymentMethod={selectedPaymentMethod}
        setSelectedPaymentMethod={setSelectedPaymentMethod}
      />
      <CheckoutBuyButton onClick={createOrder} />
    </div>
  );
};
