"use client";

import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import AddItemTab from "../components/add-item/AddItemTab";
import AddPhotosBox from "../components/add-item/AddPhotosBox";
import LoggedInNavbar from "../components/home/hero-section/LoggedInNavbar";
import { BreadCrumbSeparator } from "../components/svgs/BreadCrumbSeparator";
import { PaleGreenCircle } from "../components/svgs/PaleGreenCircle";
import WhiteCircle from "../components/svgs/WhiteCircle";
import AddItemDetailsBox from "../components/add-item/AddItemDetailsBox";
import AddItemAddressBox from "../components/add-item/AddItemAddressBox";
import AddItemResultModal from "../components/add-item/AddItemResultModal";
import Footer from "../components/footer/Footer";
import { useAuthentication } from "../hooks/useAuthentication";

const AddItemPage = () => {
  const [selected, setSelected] = useState<number>(1);
  const { isClient } = useAuthentication();

  const handleBackClick = () => {
    if (selected > 1 && selected < 4) {
      setSelected(selected - 1);
    }
  };

  return (
    <main
      className="px-2 pb-28 pt-10 bg-white h-screen overflow-y-scroll relative z-0 xm:px-5 lg:overflow-hidden lg:bg-gray-100 lg:pt-[50px] lg:h-full lg:px-0 lg:pb-0"
      suppressHydrationWarning={true}
    >
      <div className="hidden w-full lg:block lg:mb-5 lg:px-20">
        <LoggedInNavbar isWhite />
      </div>
      <button
        type="button"
        className="flex items-center gap-x-[11px] mb-5 lg:hidden"
        onClick={handleBackClick}
      >
        <div className="cursor-pointer">
          <BreadCrumbSeparator mobile />
        </div>
        <span className="text-[13px] leading-[20px] font-bold">Back</span>
      </button>
      {isClient && (
        <div className="block w-full max-width relative z-40 lg:px-20 lg:mb-28 2xl:px-0">
          <div className="lg:hidden">
            {selected === 1 && <AddPhotosBox />}
            {selected === 2 && <AddItemDetailsBox />}
            {selected === 3 && <AddItemAddressBox />}
          </div>
          <p className="hidden lg:block text-[34px] leading-[26px] font-extralight text-center my-10">
            Simply gift your item in{" "}
            <b className="font-bold">three simple steps!</b>
          </p>
          <div className="hidden lg:grid grid-cols-3 items-stretch justify-center gap-x-20 relative z-40 bg-white w-full rounded-[20px] pt-[50px] px-5 lg:h-[800px] 2xl:px-[70px]">
            <AddPhotosBox />
            <AddItemDetailsBox />
            <AddItemAddressBox />
          </div>
          <AddItemResultModal />
          <div className="hidden lg:block lg:absolute lg:-right-[32rem] lg:top-0 lg:z-10">
            <PaleGreenCircle />
          </div>
        </div>
      )}
      <AddItemTab selected={selected} setSelected={setSelected} />
      <MobileMenu isPrimary={false} />
      <div className="relative z-0">
        <Footer />
      </div>
      <div className="hidden lg:block lg:absolute lg:-left-[33rem] lg:-bottom-0 lg:-z-50">
        <WhiteCircle />
      </div>
    </main>
  );
};

export default AddItemPage;
