"use client";

import { useState } from "react";
import Link from "next/link";
import HamburgerMenuButton from "./HamburgerMenuButton";
import Menu from "./Menu";
import { FreethingsLogo } from "../../svgs/Freethings";
import { useUser } from "@/app/hooks/useUser";
import { useLogout } from "@/app/hooks/useLogout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoggedIn } = useUser();
  const { handleLogout } = useLogout();

  return (
    <nav className="py-[26px] px-3 mb-7 relative lg:static lg:mb-0 lg:py-0 lg:px-0">
      <div className="flex items-center justify-between lg:hidden">
        <Link href="/">
          <FreethingsLogo />
        </Link>
        <div className="-mr-20">
          {isLoggedIn ? (
            <span
              className="nav__btn border text-gray-main rounded-[10px] border-gray-main h-8"
              onClick={handleLogout}
            >
              Logout
            </span>
          ) : (
            <Link
              href="/login"
              className="nav__btn border text-gray-main rounded-[10px] border-gray-main h-8"
            >
              Login
            </Link>
          )}
        </div>
        <HamburgerMenuButton setIsOpen={setIsOpen} />
      </div>
      <div className="hidden lg:flex items-center gap-x-[70px] text-[15px] leading-[10px] font-bold text-white">
        <div className="flex items-center gap-x-5">
          <div>
            {isLoggedIn ? (
              <span className="nav__btn" onClick={handleLogout}>
                Logout
              </span>
            ) : (
              <Link href="/login" className="nav__btn">
                Login
              </Link>
            )}
          </div>
          <div>
            {isLoggedIn ? (
              <Link
                href="/profile/requests"
                className="nav__btn nav__btn--outline"
              >
                Profile
              </Link>
            ) : (
              <Link href="/login" className="nav__btn nav__btn--outline">
                Sign Up
              </Link>
            )}
          </div>
        </div>
        <HamburgerMenuButton setIsOpen={setIsOpen} />
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
