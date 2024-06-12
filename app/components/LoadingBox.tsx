import { LoadingDots } from "./svgs/LoadingDots";

const LoadingBox = () => {
  return (
    <div className="flex items-center justify-center gap-x-[10px] pb-10">
      <p className="text-center text-[18px] font-inter leading-[30px] font-normal text-gray-main lg:text-[26px]">
        Loading more items
      </p>
      <div className="mt-[6px] lg:mt-[10px]">
        <LoadingDots />
      </div>
    </div>
  );
};

export default LoadingBox;
