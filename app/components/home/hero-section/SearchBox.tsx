import HeroCategories from "./HeroCategories";
import HeroSearchInput from "./HeroSearchInput";
import { Location } from "../../svgs/Location";

interface SearchBoxProps {
  mobile?: boolean;
  isGradient?: boolean;
}

const SearchBox = ({ isGradient = false, mobile = false }: SearchBoxProps) => {
  return (
    <>
      {mobile ? (
        <div className="p-[10px] bg-[#ffffffcc] rounded-[20px] flex flex-col gap-y-[13px] lg:hidden">
          <HeroSearchInput mobile />
          <div className="flex items-center justify-between text-[12px] leading-[18px]">
            <div className="flex items-center gap-x-[5px]">
              <Location />
              <span className="text-green-main font-normal ">
                Vancouver Downtown
              </span>
            </div>
            <button type="button" className="text-blue-main font-medium">
              change
            </button>
          </div>
          <div>
            <HeroCategories isPrimary />
          </div>
        </div>
      ) : (
        <div className="hidden max-width lg:flex lg:items-center lg:max-w-[992px] lg:relative lg:z-10">
          <div
            className={`flex flex-col items-center justify-center gap-y-7 flex-1 py-[35px] px-[50px] max-w-[912px] mb-7 rounded-[50px] ${
              isGradient
                ? "search-box--gradient border__gradient"
                : "search-box--white"
            }`}
          >
            {isGradient ? <HeroSearchInput isBordered /> : <HeroSearchInput />}
            {isGradient ? (
              <HeroCategories isDark isPrimary />
            ) : (
              <HeroCategories isPrimary />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBox;

const categoriesData = [
  { name: "IKEA", id: 1 },
  { name: "near me", id: 2 },
  { name: "kitchen", id: 3 },
  { name: "books", id: 4 },
  { name: "plants", id: 5 },
  { name: "furniture", id: 6 },
  { name: "furniture", id: 7 },
  { name: "added today", id: 8 },
];
