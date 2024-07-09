import { useLocaleContext } from '@/context/locale.context';

export const AboutCourse = () => {
  const { t } = useLocaleContext();
  return (
    <div className="mt-3">
      <h2 className="text-card-foreground text-lg font-semibold">{t('course.about_course')}:</h2>
      <div className='text-gray-400 text-sm mt-2'>
        {` Frontend dasturlash bo'yicha mutaxassis og'zaki va yozma nutqdagi ma'lumotlarni tahlil qilish, unga ko'ra xulosa
        chiqarish va shunga oid masalalarda odamlarning hayotini yengillashtirish uchun yordam beradi. Ko'pchilikka
        mashhur ChatGPT ham NLP texnologiyalari asosiga qurilgan.`}
      </div>
    </div>
  );
};
