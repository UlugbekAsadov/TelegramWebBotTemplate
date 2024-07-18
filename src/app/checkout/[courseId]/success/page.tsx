import { dehydrate } from '@tanstack/react-query';

import { CheckoutStatus } from '@/pages/checkout-page/checkout-status';
import Hydrate from '@/react-query/hydrate-client';
import { getCourseQueryFn } from '@/react-query/queries/courses.query';
import getQueryClient from '@/react-query/query-client';

interface IProps {
  params: {
    courseId: string;
  };
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
      <CheckoutStatus type="success" courseId={params.courseId} />
    </Hydrate>
  );
}
