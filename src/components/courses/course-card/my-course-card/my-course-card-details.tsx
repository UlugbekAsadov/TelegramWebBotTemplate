import { Progress } from '@/components/ui/progress';

export const MyCourseCardDetails = () => {
  return (
    <div>
      <div className="flex flex-col items-start  mt-3">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-card-foreground flex-grow">Marketing</h2>
          <div className="bg-white shadow-primaryShadow py-1 px-2 rounded-full w-10 h-[22px] flex items-center justify-center">
            <span className="text-primary text-xs font-semibold">32%</span>
          </div>
        </div>
        <h2 className="text-sm text-gray-400">Anvar Narzullayev & Muhammad Xalil</h2>
      </div>
      <Progress value={32} className="mt-3" />
    </div>
  );
};
