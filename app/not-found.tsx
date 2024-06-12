"use client";

import Image from "next/image";
import Link from "next/link";
import LoggedInNavbar from "./components/home/hero-section/LoggedInNavbar";
import { PaleGreenCircle } from "./components/svgs/PaleGreenCircle";
import WhiteCircle from "./components/svgs/WhiteCircle";
import NotFoundImg from "@/public/images/not-found.png";
import NotFoundImgNumber from "@/public/images/404.png";
import Footer from "./components/footer/Footer";
import Navbar from "./components/home/hero-section/Navbar";
import MobileMenu from "./components/MobileMenu";

const NotFound = () => {
  return (
    <main className="overflow-x-hidden mx-auto relative h-screen lg:relative lg:bg-gray-100 lg:z-10 lg:pt-[50px] lg:overflow-x-visible lg:w-full">
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div className="p-5 pt-0">
        <div className="max-width mb-20">
          <div className="hidden lg:block lg:mb-[22px]">
            <LoggedInNavbar isWhite />
          </div>
        </div>
        <div className="max-width flex flex-col items-center justify-center relative z-20 pt-[60px]">
          <Image
            src={NotFoundImgNumber}
            alt="not found"
            className="w-[210px] h-[129px] absolute top-8 left-1/2 -translate-x-1/2 z-0 lg:top-24"
          />
          <Image
            src={NotFoundImg}
            alt="not found"
            width={616}
            height={577}
            className="z-20 w-[228px] h-[252px] lg:w-[616px] lg:h-[577px]"
          />
          <div className="text-center font-medium flex flex-col items-center gap-y-6 text-[25px] leading-[27.5px] mb-10 lg:text-[37px] lg:leading-[40.7px] lg:flex-row">
            <p>This page is breakdancing in cyberspace.</p>
            <p> Catching it ASAP</p>
          </div>
          <Link
            href="/"
            className="flex items-center justify-center rounded-[70px] border-[2px] border-transparent h-16 w-[338px] mx-auto py-[18px] px-[50px] text-[18px[ leading-[23px] text-white bg-black opacity-80 mobile__gradient mobile__menu__gradient"
          >
            Back to home
          </Link>
        </div>
        <div className="hidden lg:block lg:absolute lg:-right-64 lg:top-28 lg:-z-0">
          <PaleGreenCircle />
        </div>
        <div className="hidden lg:block lg:absolute lg:left-0 lg:-bottom-44 lg:z-0">
          <WhiteCircle />
        </div>
      </div>
      <MobileMenu />
      <Footer />
    </main>
  );
};

export default NotFound;
