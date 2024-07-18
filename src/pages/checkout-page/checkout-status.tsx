'use client';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { useLocaleContext } from '@/context/locale.context';
import { ISingleCourse } from '@/lib/interfaces/course.interface';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';

interface IProps {
  courseId: string;
  type: 'fail' | 'success';
}

export const CheckoutStatus = ({ courseId, type }: IProps) => {
  const { t } = useLocaleContext();
  const router = useRouter();
  const isSuccess = type === 'success';
  const courseQuery = useQuery<ISingleCourse>({
    queryKey: ['course', courseId],
    queryFn: () => getCourseQueryFn(courseId),
  });

  if (!courseQuery.isLoading && !courseQuery.data) {
    router.push('/404');
    return;
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-dvh p-section bg-card">
      <div className="flex-grow flex items-center">
        <div
          className={twMerge(
            'h-[150px] w-[150px] flex items-center justify-center rounded-full bg-red-500/20 animate-out',
            isSuccess && 'bg-green-500/20'
          )}
        >
          <div
            className={twMerge(
              'h-[100px] w-[100px]  p-5 bg-red-500 rounded-full flex justify-center items-center',
              isSuccess && 'bg-green-500'
            )}
          >
            {isSuccess ? (
              <CheckIcon className="w-full h-full text-white" />
            ) : (
              <Cross2Icon className="w-full h-full text-white" />
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-sm">
          {isSuccess
            ? t('checkout.thank_you_for_purchasing_product', { courseName: courseQuery.data?.title as string })
            : t('checkout.error_while_purchasing_product', { courseName: courseQuery.data?.title as string })}
        </p>
        {isSuccess ? (
          <Button asChild className="w-full mt-12" size="lg">
            <Link href={`/my-courses`}>{t('checkout.move_to_my_courses')}</Link>
          </Button>
        ) : (
          <Button asChild className="w-full mt-12" size="lg" onClick={router.back}>
            {t('checkout.go_back')}
          </Button>
        )}
      </div>
    </div>
  );
};
