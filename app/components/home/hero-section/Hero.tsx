import HeroSlider from "./HeroSlider";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <>
      <div className="lg:hidden">
        <Navbar />
        <div className="p-[10px]">
          <SearchBox mobile />
        </div>
      </div>
      <div className="hidden lg:block lg:mb-10">
        <HeroSlider />
      </div>
    </>
  );
};

export default Hero;
