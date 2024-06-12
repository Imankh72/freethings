import { useSearch } from "@/app/hooks/useSearch";
import { useSearchSubmit } from "@/app/hooks/useSearchSubmit";
import { ChangeEvent, useTransition } from "react";

interface HeroSearchInputProp {
  mobile?: boolean;
  isBordered?: boolean;
}

const HeroSearchInput = ({
  isBordered = false,
  mobile = false,
}: HeroSearchInputProp) => {
  const { searchValue, setSearchValue } = useSearch();
  const { handleSubmit } = useSearchSubmit();
  const [isPending, startTransition] = useTransition();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchValue(e.target.value);
    });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {mobile ? (
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search freethings"
            className="text-[25px] text-gray-main font-extralight outline-0 w-[80%] placeholder:text-gray-light"
            value={searchValue}
            onChange={handleOnChange}
          />
          <button
            type="button"
            className="text-[18px] text-gray-main leading-[19px] font-medium"
          >
            sort&
            <br />
            filter
          </button>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full flex items-center">
            <input
              type="text"
              className={`w-full px-10 py-[2px] bg-white rounded-tl-[20px] rounded-bl-[20px] text-grey-main leading-[58px] font-light text-[31px] border border-[#D2D2D2] border-r-0 focus:outline-none ${
                isBordered && "placeholder:text-gray-main"
              }`}
              placeholder="find free things!"
              value={searchValue}
              onChange={handleOnChange}
            />
            <button
              type="button"
              className={`text-white flex items-center justify-center px-16 py-[2.5px] rounded-tr-[20px] rounded-br-[20px] text-[24px] leading-[58px] font-semibold ${
                isBordered ? "border border-[#D2D2D2]" : "bg-blue-main"
              }`}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default HeroSearchInput;
