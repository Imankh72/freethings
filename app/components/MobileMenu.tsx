import Link from "next/link";
import CategoriesIcon from "./svgs/CategoriesIcon";
import HomeIcon from "./svgs/HomeIcon";
import { ListIcon } from "./svgs/ListIcon";
import PlusIcon from "./svgs/PlusIcon";
import SearchIcon from "./svgs/SearchIcon";

interface MobileMenuProp {
  isPrimary?: boolean;
}

const MobileMenu = ({ isPrimary = true }: MobileMenuProp) => {
  return (
    <div className="fixed z-30 bottom-5 py-[18px] px-[50px] flex items-center justify-between left-1/2 -translate-x-1/2 w-[338px] h-[70px] rounded-[70px] bg-[#000000cc] opacity-80 border-[1.5px] border-solid border-transparent mobile__menu__gradient lg:hidden">
      <Link href="/" type="button" className="mobile__menu__icon">
        <HomeIcon />
        <span className="text-white text-[6px] whitespace-nowrap">home</span>
      </Link>
      {isPrimary ? (
        <>
          <Link href="/add-item" type="button" className="mobile__menu__icon">
            <PlusIcon />
            <span className="text-white text-[6px] whitespace-nowrap">
              add item
            </span>
          </Link>
          <Link href="/products" type="button" className="mobile__menu__icon">
            <SearchIcon />
            <span className="text-white text-[6px] whitespace-nowrap">
              search
            </span>
          </Link>
        </>
      ) : (
        <>
          <button type="button" className="mobile__menu__icon">
            <ListIcon />
          </button>
          <Link href="/add-item" type="button" className="mobile__menu__icon">
            <PlusIcon />
            <span className="text-white text-[6px] whitespace-nowrap">
              add item
            </span>
          </Link>
        </>
      )}
      <Link href="/categories/1" type="button" className="mobile__menu__icon">
        <CategoriesIcon />
        <span className="text-white text-[6px] whitespace-nowrap">
          categories
        </span>
      </Link>
    </div>
  );
};
export default MobileMenu;
