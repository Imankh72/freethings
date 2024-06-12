import Image from "next/image";
import { BlueCircle } from "../svgs/BlueCircle";
import iphone from "@/public/images/iPhone.png";
import iphoneMobile from "@/public/images/iphone-mobile.png";

const SpottingSection = () => {
  return (
    <div className="px-3 relative max-width lg:pt-[100px] lg:w-full lg:mb-[100px] lg:px-20">
      <div className="-mt-[150px] -mr-[10px] lg:hidden">
        <Image className="w-full" src={iphoneMobile} alt="iphone" />
      </div>
      <div className="hidden lg:block ">
        <Image
          src={iphone}
          className="lg:mt-0 lg:absolute lg:-right-[15.25rem] lg:-top-[28rem] lg:-z-50"
          alt="iphone"
        />
      </div>
      <div className="lg:w-[861px]">
        <div className="mb-3 lg:mb-0">
          <h2 className="heading spotting__heading">
            Have you tried <br />
            <b className="font-bold whitespace-nowrap">Freethings Spotting</b>
            <span className="spotting-question-mark">&#63;</span>
          </h2>
        </div>
        <p className="paragraph spotting__paragraph truncate__text">
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
          className="btn w-full mx-auto lg:relative lg:z-10 lg:w-auto lg:mx-0"
        >
          Read More
        </button>
        <div className="hidden lg:block lg:absolute lg:-top-24 lg:-left-[15.25rem]">
          <BlueCircle />
        </div>
      </div>
    </div>
  );
};
export default SpottingSection;
