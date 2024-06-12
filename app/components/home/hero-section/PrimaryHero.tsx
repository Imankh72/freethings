import Header from "./Header";
import HeroImage from "./HeroImage";
import SearchBox from "./SearchBox";
import { Star } from "../../svgs/Star";
import HeadingBox from "./HeadingBox";

const PrimaryHero = () => {
  return (
    <div className="hero primary__hero lg:px-20 lg:h-full lg:pb-10">
      <Header />
      <div className="flex flex-col gap-y-0 items-stretch max-width relative">
        <div className="max-width lg:flex lg:justify-center">
          <HeroImage />
          <SearchBox />
        </div>
        <HeadingBox />
        <div className="absolute -left-80 -bottom-[37rem]">
          <Star />
        </div>
      </div>
    </div>
  );
};

export default PrimaryHero;
