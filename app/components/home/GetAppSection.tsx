import Image from "next/image";
import { BlueCircle } from "../svgs/BlueCircle";
import IphoneDesktop from "@/public/images/iPhone-13-desktop.png";
import IphoneMobile from "@/public/images/iPhone-13-mobile.png";
import GooglePlay from "@/public/images/google-play.svg";
import AppStore from "@/public/images/app-store.svg";
import BarCode from "@/public/images/barcode.svg";

const GetAppSection = () => {
  return (
    <div className="max-width px-3 flex flex-col items-center pt-5 relative z-10 lg:flex-row lg:px-20">
      <Image
        src={IphoneMobile}
        className="w-[300px] h-auto lg:hidden"
        alt="iphone"
        width={435}
        height={724}
      />
      <div className="absolute -left-20 top-0 -z-30 lg:hidden">
        <BlueCircle className="w-[243px] h-[243px]" />
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="text-[32px] leading-10 font-light font-inter lg:text-[72px] lg:leading-[80px] lg:mb-12 lg:flex lg:items-center lg:gap-x-5">
          <Image
            src={BarCode}
            alt="barcode"
            className="hidden lg:inline-block lg:w-[150px] lg:h-[159px]"
            width={150}
            height={159}
          />
          <div className="">
            <h2>We’ve got an app,</h2>
            <h2 className="text-blue-main font-bold">
              <b className="text-black">which is</b> also free!
            </h2>
          </div>
        </div>
        <p className="text-[12px] leading-[18px] font-medium truncate__text lg:text-[16px] lg:leading-[25px] lg:mb-12">
          Discover lost treasures and rescue forgotten belongings with our
          innovative street-finding app! Say goodbye to items lost to the
          elements. Our app empowers you to locate and retrieve valuable or
          sentimental items left in the streets before Mother Nature takes her
          toll. Join our community of urban explorers and give a second chance
          to items waiting to be reunited with their owners. Don&apos;t let the
          weather ruin your possessions; download our app today and be a hero
          for lost things!
        </p>
        <button
          type="button"
          className="hidden lg:flex lg:items-center lg:justify-center lg:text-[15px] lg:leading-[10px] lg:rounded-[10px] lg:font-bold lg:border lg:border-gray-main lg:px-[30px] lg:whitespace-nowrap lg:py-[14px] lg:w-[144px]"
        >
          Read More
        </button>
        <div className="flex items-center justify-between lg:hidden">
          <span className="text-[15px] leading-[10px] font-bold whitespace-nowrap">
            Available at:
          </span>
          <div className="flex items-center gap-x-[7px]">
            <Image src={GooglePlay} alt="google play" width={125} height={37} />
            <Image src={AppStore} alt="app store" width={110} height={37} />
          </div>
        </div>
      </div>
      <Image
        src={IphoneDesktop}
        className="hidden lg:inline-block lg:w-[435px] lg:h-[735px]"
        alt="iphone"
        width={435}
        height={724}
      />
    </div>
  );
};

export default GetAppSection;
