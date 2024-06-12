import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/hooks/useUser";
import MenuBtnBox from "../../MenuBtnBox";
import { MenuPlusIcon } from "../../svgs/MenuPlusIcon";
import { MenuProfileLoginIcon } from "../../svgs/MenuProfileLoginIcon";
import { MenuSettingsIcon } from "../../svgs/MenuSettingsIcon";
import { MenuSignUpIcon } from "../../svgs/MenuSignUpIcon";
import { useOutsideClick } from "@/app/hooks/useClickOutside";
import GooglePlay from "@/public/images/google-play.svg";
import AppStore from "@/public/images/app-store.svg";
import { useQuery } from "@tanstack/react-query";
import httpService from "@/app/services/http";
import Categories from "../Categories";

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  const router = useRouter();
  const { isLoggedIn } = useUser();

  const { data: categories } = useQuery({
    queryKey: ["category-list"],
    queryFn: async () => {
      const {
        data: { data },
      }: Categories = await httpService("/v1/product/categorylist");
      return data;
    },
    staleTime: 60 * 1000,
    retry: 1,
  });

  const handleOnClickOutside = () => {
    if (isOpen === true) {
      setIsOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleCategoryClick = (id: number, title: string) => {
    router.push(
      `/categories/${title.replace(/\s+/g, "-").toLowerCase()}-${id}`
    );
    handleOnClickOutside();
  };

  const handleOnLinkClick = (url: string) => {
    router.push(url);
    handleOnClickOutside();
  };

  const ref = useOutsideClick(handleOnClickOutside);

  return (
    <>
      {categories?.length > 0 && (
        <div
          className={`bg-white pb-5 pt-5 px-[25px] w-full h-screen absolute !z-[60] top-0 transition-all duration-1000 overflow-y-scroll ${
            isOpen ? "right-0 opacity-100" : "-right-full opacity-0"
          } lg:w-[1148px] lg:px-[85px] lg:py-[50px] lg:rounded-tl-[20px]`}
          ref={ref}
        >
          <div>
            <button
              type="button"
              className="close__menu mt-3 mb-5 flex flex-col h-[44px]"
              onClick={handleOnClickOutside}
            >
              <span className="hamburger-menu__line bg-[#FF823F] rotate-right"></span>
              <span className="hamburger-menu__line bg-[#0ECAF6] rotate-left"></span>
            </button>
            <h2 className="text-[30px] text-gray-main font-medium mb-3 lg:text-[70px] lg:mb-5">
              Categories
            </h2>
          </div>
          <ul className="mb-8 lg:flex lg:items-center lg:justify-between lg:mb-24">
            {categories.map(({ id, imageUrl, title }) => (
              <li
                key={id}
                className="flex gap-x-[10px] w-full h-[57px] cursor-pointer lg:w-[90px] lg:h-[110px] lg:flex-col lg:justify-between lg:items-center"
                onClick={() => handleCategoryClick(id, title)}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  className="w-7 h-7 object-cover lg:w-auto lg:h-[110px]"
                  width={90}
                  height={110}
                />
                <span className="text-[17px] leading-[30px] font-medium lg:text-[18px] lg:font-semibold lg:mt-0">
                  {title}
                </span>
              </li>
            ))}
          </ul>
          <div className="hidden lg:mb-[72px] lg:flex lg:items-center lg:gap-x-[30px]">
            <MenuBtnBox
              text="Add Item"
              icon={<MenuPlusIcon />}
              url="add-item"
              setIsOpen={setIsOpen}
            />
            <MenuBtnBox
              text={isLoggedIn ? "Profile" : "Login"}
              icon={<MenuProfileLoginIcon />}
              url={isLoggedIn ? "profile/requests" : "login"}
              setIsOpen={setIsOpen}
            />
            <MenuBtnBox
              text={isLoggedIn ? "Settings" : "Sign UP"}
              icon={isLoggedIn ? <MenuSettingsIcon /> : <MenuSignUpIcon />}
              url={isLoggedIn ? "settings" : "login"}
              setIsOpen={setIsOpen}
            />
          </div>
          <div className="menu__line lg:mb-[52px]"></div>
          <div className="flex flex-col gap-y-8 text-[22px] font-medium lg:gap-y-[52px] lg:relative lg:z-[60]">
            <span
              className="hidden lg:inline-block lg:cursor-pointer"
              onClick={() => handleOnLinkClick("/profile/settings")}
            >
              Profile & Settings
            </span>
            <span className="cursor-pointer">About FreeThings</span>
            <span className="cursor-pointer">Contact us</span>
            <div className="flex items-center gap-x-6">
              <Link href="/" className="whitespace-nowrap">
                Get the app
              </Link>
              <div className="flex items-center gap-x-[7px]">
                <Link href="/">
                  <Image
                    src={GooglePlay}
                    alt="Google Play"
                    width={100}
                    height={30}
                    className="lg:w-[100px] lg:h-[30px]"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={AppStore}
                    alt="App Store"
                    width={100}
                    height={30}
                    className="lg:w-[100px] lg:h-[30px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
