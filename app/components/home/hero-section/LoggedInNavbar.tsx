"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HamburgerMenuButton from "./HamburgerMenuButton";
import { FreethingsLogo } from "../../svgs/Freethings";
import LoggedInSearchInput from "./LoggedInSearchInput";
import Menu from "./Menu";
import { useUser } from "@/app/hooks/useUser";
import { getCookie } from "cookies-next";
import { useLogout } from "@/app/hooks/useLogout";
import { useHeroSlider } from "@/app/hooks/useHeroSilder";

interface LoggedInNavbarProp {
  isWhite?: boolean;
}

const LoggedInNavbar = ({ isWhite = false }: LoggedInNavbarProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoggedIn, setIsLoggedIn } = useUser();
  const { handleLogout } = useLogout();
  const { setSelectedSlide } = useHeroSlider();

  const logOut = async () => {
    handleLogout();
    setSelectedSlide(1);
  };

  useEffect(() => {
    getCookie("user_token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return (
    <nav className="py-[26px] px-3 mb-7 max-width relative lg:static lg:mb-0 lg:py-0 lg:px-0">
      <div
        className={`rounded-[20px] backdrop-blur-[22px] flex items-center justify-between px-10 py-[10px] ${
          isWhite ? "bg-white text-gray-main" : "bg-[#ffffff33] text-white"
        }`}
      >
        <Link href="/" className="flex items-center justify-center mt-2">
          {isWhite ? <FreethingsLogo isBlack /> : <FreethingsLogo />}
        </Link>
        <div className="flex items-center gap-x-[70px]">
          <div>
            {isWhite ? (
              <LoggedInSearchInput isWhite />
            ) : (
              <LoggedInSearchInput />
            )}
          </div>
          <div className="flex items-center gap-x-5">
            {isLoggedIn ? (
              <>
                <span
                  className={`nav__btn ${isWhite && "text-gray-main"}`}
                  onClick={logOut}
                >
                  logout
                </span>
                <div className="flex items-center">
                  <span className="flex items-center rounded-full w-10 h-10 bg-white"></span>
                  <Link
                    href="/profile/requests"
                    className={`nav__btn ${isWhite && "text-gray-main"}`}
                  >
                    My Account
                  </Link>
                </div>
              </>
            ) : (
              <Link
                href="/login"
                className="nav__btn nav__btn--outline text-gray-main border-gray-main"
              >
                SignUp
              </Link>
            )}
          </div>
          <div className="flex items-center">
            {isWhite ? (
              <HamburgerMenuButton isPDPPage setIsOpen={setIsOpen} />
            ) : (
              <HamburgerMenuButton isLoggedIn setIsOpen={setIsOpen} />
            )}
          </div>
        </div>
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default LoggedInNavbar;
