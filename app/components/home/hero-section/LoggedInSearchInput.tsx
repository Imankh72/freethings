"use client";

import { useSearch } from "@/app/hooks/useSearch";
import { useSearchSubmit } from "@/app/hooks/useSearchSubmit";

interface LoggedInSearchInputProp {
  isWhite?: boolean;
}

const LoggedInSearchInput = ({ isWhite = false }: LoggedInSearchInputProp) => {
  const { searchValue, setSearchValue } = useSearch();
  const { handleSubmit } = useSearchSubmit();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className={`text-[18px] font-extralight px-5 py-[6px] rounded-[14px] w-[328px] border border-transparent relative z-30 focus:outline-none ${
            isWhite
              ? "bg-white text-gray-main placeholder:text-gray-main nav__search__input--gradient"
              : "bg-[#ffffff33] text-white placeholder:text-white"
          }`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LoggedInSearchInput;
