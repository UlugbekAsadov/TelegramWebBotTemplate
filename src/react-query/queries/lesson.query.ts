import fetcher from '@/lib/fetcher';

export const getLessonQueryFn = (id: string) =>
  fetcher(`/lesson/${id}`)
    .then((res) => res.json())
    .then((data) => data.data);
