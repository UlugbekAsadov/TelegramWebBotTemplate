import fetcher from '@/lib/fetcher';

export const getCoursesQueryFn = (sort: string, pageParam?: string) =>
  fetcher(pageParam || `/courses${sort && `?sort=${sort}`}`)
    .then((res) => res.json())
    .then((data) => data);

export const getCourseQueryFn = (id: string) =>
  fetcher(`/courses/${id}`)
    .then((res) => res.json())
    .then((data) => data.data);
