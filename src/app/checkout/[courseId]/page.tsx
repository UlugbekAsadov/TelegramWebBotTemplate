import { dehydrate } from '@tanstack/react-query';

import { CheckoutPage } from '@/components/pages/checkout-page/checkout-page';
import Hydrate from '@/react-query/hydrate-client';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';
import getQueryClient from '@/react-query/query-client';

interface IProps {
  params: { courseId: string };
}
export default async function Page({ params }: IProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['course', params.courseId],
    queryFn: () => getCourseQueryFn(params.courseId),
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <CheckoutPage courseId={params.courseId} />
    </Hydrate>
  );
}
