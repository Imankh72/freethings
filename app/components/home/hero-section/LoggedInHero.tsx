import { Star } from "../../svgs/Star";
import HeroSliderDotsBox from "./HeroSliderDotsBox";
import LoggedInNavbar from "./LoggedInNavbar";

const LoggedInHero = () => {
  return (
    <div className="hero logged-in__hero lg:pt-[50px] lg:px-20 lg:h-full lg:pb-10">
      <LoggedInNavbar />
      <div className="mt-9 max-width relative">
        <h1 className="text-white text-[86px] leading-[80px] font-extralight mb-6">
          You toaster{" "}
          <b className="font-bold">
            deserves a <br /> second life
          </b>
        </h1>
        <button type="button" className="btn text-white border-white">
          Learn about freethings
        </button>
        <div className="absolute left-0 -bottom-[19.5rem]">
          <HeroSliderDotsBox />
        </div>
        <div className="absolute -left-80 -bottom-[56.5rem]">
          <Star />
        </div>
      </div>
    </div>
  );
};

export default LoggedInHero;
