import { useState } from "react";
import Image from "next/image";
import { DayPicker } from "react-day-picker";
import { SortIcon } from "../../svgs/SortIcon";
import RequestInfo from "./RequestInfo";
import { CloseIcon } from "../../svgs/CloseIcon";
import { BreadCrumbSeparator } from "../../svgs/BreadCrumbSeparator";
import { useRequestModal } from "@/app/hooks/useRequestModal";

const DesktopAllRequestsModal = () => {
  const { closeAllRequestsModal } = useRequestModal();
  const [selected, setSelected] = useState<Date>();
  const [selectedRequestBox, setSelectedRequestBox] = useState<number | null>(
    null
  );
  const myArray = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="hidden bg-white lg:flex lg:items-stretch lg:gap-x-[10px] lg:pt-[10px] lg:w-full lg:h-full">
      <div className="flex flex-col gap-y-2 items-stretch w-[340px] justify-between">
        <Image
          className="w-[338px] h-[225px] rounded-t-[20px] rounded-b-[15px]"
          src="/images/pickup-1.png"
          alt="picture"
          width={338}
          height={225}
        />
        <div>
          <h5 className="text-[24px] leading-[30px] font-bold">
            Item With Very Long Name
          </h5>
          <span className="leading-[30px] text-gray-light">
            Listed 1 day ago
          </span>
        </div>
        <button
          type="button"
          className="flex items-center justify-center h[50px] text-white text-[18px] leading-[23px] rounded-[70px] border-[2px] border-transparent mobile__menu__gradient opacity-80 px-[50px] py-[18px] whitespace-nowrap"
        >
          Select Earliest Pick Up
        </button>
      </div>
      <div className="flex flex-col flex-[2] items-stretch gap-y-[6px]">
        <div className="flex justify-end gap-x-[25px] pr-[25px] -mt-1">
          <div className="flex gap-x-[23px]">
            <button
              type="button"
              className="flex items-center gap-x-[3px] text-[14px] leading-[18px] font-medium"
            >
              <BreadCrumbSeparator mobile />
              Previous Listing
            </button>
            <button
              type="button"
              className="flex items-center gap-x-[3px] text-[14px] leading-[18px] font-medium"
            >
              Next Listing
              <div className="rotate-180">
                <BreadCrumbSeparator mobile />
              </div>
            </button>
          </div>
          <button
            type="button"
            className="text-[14px] leading-[18px] font-medium flex items-center justify-center pl-3 py-[2px] rounded-[30px] border border-black"
            onClick={closeAllRequestsModal}
          >
            Close
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-stretch gap-x-[30px] bg-[#EFF3F6] rounded-[20px] pl-5 h-[335px]">
          <div className="py-[15px]">
            <p className="text-[24px] leading-[24px] font-bold mb-[10px]">
              45 Requests
            </p>
            <div className="all-requests__calendar">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
              />
            </div>
            <div className="flex items-center justify-center gap-x-1 text-[14px] leading-[13px] font-medium">
              <p className="text-gray-light">Easiest Pick Up:</p>
              <p className="text-black">Monday 23rd, 5 pm</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-y-3 w-full pr-[13px] pt-[10px]">
            <div className="flex items-center justify-end gap-x-[2px] pr-[14px]">
              <span className="text-[18px] leading-[19px] font-medium">
                Sort
              </span>
              <SortIcon />
            </div>
            <div className="flex flex-col gap-y-[15px] overflow-y-scroll h-[330px] pr-[11px] w-[390px] pb-2">
              {myArray.map((index) => (
                <RequestInfo
                  key={index}
                  id={index}
                  selectedRequestBox={selectedRequestBox}
                  setSelectedRequestBox={setSelectedRequestBox}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopAllRequestsModal;
