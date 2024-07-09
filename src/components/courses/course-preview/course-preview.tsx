import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

import { PreviewPlayIcon } from '@/assets/icons';
import { useLocaleContext } from '@/context/locale.context';

export const CoursePreview = () => {
  const router = useRouter();
  const { t } = useLocaleContext()
  return (
    <div
      style={{ backgroundImage: 'url(/mock-images/course-preview.png)' }}
      className="bg-no-repeat bg-cover bg-center w-full h-[310px] flex flex-col relative items-center justify-center z-10"
    >
      <div onClick={router.back} className="flex items-start absolute left-3 top-3 cursor-pointer z-20">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
          <ArrowLeftIcon />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-card w-fit p-3 rounded-full">
        <div className="w-8 h-8 flex items-center justify-center rounded-full">
          <PreviewPlayIcon />
        </div>
        <p>{t("course.preview_title")}</p>
      </div>
    </div>
  );
};
