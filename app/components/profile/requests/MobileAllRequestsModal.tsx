import Image from "next/image";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { BreadCrumbSeparator } from "../../svgs/BreadCrumbSeparator";
import { SortIcon } from "../../svgs/SortIcon";
import RequestInfo from "./RequestInfo";
import { useRequestModal } from "@/app/hooks/useRequestModal";

const MobileAllRequestsModal = () => {
  const { closeAllRequestsModal } = useRequestModal();
  const [selected, setSelected] = useState<Date>();
  const myArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center gap-y-5 overflow-y-scroll lg:hidden">
      <div
        className="flex items-center justify-between w-full"
        onClick={closeAllRequestsModal}
      >
        <BreadCrumbSeparator mobile />
        <span className="text-[13px] leading-[20px]">requests</span>
      </div>
      <div className="flex items-center gap-x-5">
        <Image
          className="rounded-[10px] w-[90px] h-[90px]"
          src="/images/pickup-1.png"
          alt="picture"
          width={90}
          height={90}
        />
        <h4 className="text-[24px] leading-[24px] font-bold">
          Item Very Long Name
        </h4>
      </div>
      <div className="flex items-center justify-between w-full">
        <span className="text-[24px] leading-[24px] font-bold">7 Requests</span>
        <div className="flex items-center gap-x-[2px]">
          <span className="text-[18px] leading-[19px] font-medium text-black">
            Sort
          </span>
          <SortIcon />
        </div>
      </div>
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
      <div className="w-full flex flex-col gap-y-[15px] overflow-scroll pb-20 max-h-[500px]">
        {myArray.map((_, index) => (
          <RequestInfo key={index} mobile />
        ))}
      </div>
    </div>
  );
};

export default MobileAllRequestsModal;
