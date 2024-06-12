"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import LoggedInNavbar from "../components/home/hero-section/LoggedInNavbar";
import BreadCrumb from "../components/product-display/BreadCrumb";
import ProfileNavbar from "../components/profile/ProfileNavbar";
import MobileMenu from "../components/MobileMenu";
import { PaleGreenCircle } from "../components/svgs/PaleGreenCircle";
import WhiteCircle from "../components/svgs/WhiteCircle";
import ProfileTab from "../components/profile/ProfileTab";
import Footer from "../components/footer/Footer";
import { useAuthentication } from "../hooks/useAuthentication";

const ProfilePageLayout = ({ children }: { children: ReactNode }) => {
  useAuthentication();
  const path = usePathname().split("/").at(-1);

  return (
    <main
      className={`lg:mx-auto relative ${
        path !== "settings" ? "pl-5 pt-10" : "py-8 px-3 lg:px-0"
      } lg:overflow-hidden lg:pb-0 lg:bg-gray-100 lg:z-10 lg:pt-[50px] lg:pl-0`}
    >
      <div className="hidden max-width lg:block lg:mb-5 lg:px-20">
        <LoggedInNavbar isWhite />
      </div>
      {path !== "settings" && (
        <div className="hidden max-width lg:block lg:mb-5 lg:px-20">
          <BreadCrumb />
        </div>
      )}
      <div className="max-width relative">
        {path !== "settings" && (
          <>
            <ProfileNavbar />
            <ProfileTab />
          </>
        )}
        <div className="hidden lg:block lg:absolute lg:-right-96 lg:top-0 lg:-z-0">
          <PaleGreenCircle />
        </div>
        <div className="hidden lg:block lg:absolute lg:-left-[38rem] lg:-bottom-[60rem] lg:-z-0">
          <WhiteCircle />
        </div>
      </div>
      {children}
      {path !== "settings" && <MobileMenu isPrimary={false} />}
      <Footer />
    </main>
  );
};

export default ProfilePageLayout;
