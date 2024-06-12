import HeroSliderDotsBox from "./HeroSliderDotsBox";

const HeadingBox = () => {
  return (
    <div className="max-width w-full relative">
      <HeroSliderDotsBox />
      <h1 className="hero__text -mr-[75px] absolute right-0 -top-20">
        everything is free here
      </h1>
    </div>
  );
};

export default HeadingBox;
