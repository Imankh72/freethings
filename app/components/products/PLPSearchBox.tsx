"use client";

import { useSearch } from "@/app/hooks/useSearch";
import BreadCrumb from "../product-display/BreadCrumb";
import { Location } from "../svgs/Location";
import { useSortAndFilter } from "@/app/hooks/useSortAndFilter";

const PLPSearchBox = () => {
  const { searchValue, setSearchValue } = useSearch();
  const { setIsOpen } = useSortAndFilter();

  return (
    <div>
      <div className="flex items-center justify-between mb-5 lg:hidden">
        <form>
          <input
            type="text"
            className="text-[48px] w-2/3 font-light placeholder:text-gray-light focus:outline-none"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        <button
          className="text-[18px] leading-[19px] font-medium"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          sort&
          <br /> filter
        </button>
      </div>
      <div className="flex items-center justify-between mb-[10px]">
        <div className="hidden lg:block">
          <BreadCrumb />
        </div>
        <div className="flex items-center gap-x-[5px]">
          <Location />
          <button type="button" className="text-green-main font-normal">
            Vancouver Downtown
          </button>
        </div>
        <button type="button" className="text-blue-main font-medium lg:hidden">
          change
        </button>
        <button
          type="button"
          className="hidden lg:inline-block lg:text-[18px] lg:leading-[19px] lg:font-medium lg:z-10"
        >
          sort & filter
        </button>
      </div>
    </div>
  );
};

export default PLPSearchBox;
