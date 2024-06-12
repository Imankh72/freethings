import { useUser } from "@/app/hooks/useUser";
import { CarouselDot } from "../../svgs/CarouselDot";
import { useHeroSlider } from "@/app/hooks/useHeroSilder";

interface HeroSliderDotsBoxProp {
  isLoggedIn?: boolean;
}

const HeroSliderDotsBox = ({ isLoggedIn = false }: HeroSliderDotsBoxProp) => {
  const { selectedSlide, setSelectedSlide } = useHeroSlider();
  const { isLoggedIn: userIsLoggedIn } = useUser();

  return (
    <div
      className={`flex items-center gap-x-[10px] z-20 ${
        isLoggedIn ? "absolute left-0 -bottom-[19.5rem]" : "relative"
      }`}
    >
      <div onClick={() => setSelectedSlide(1)}>
        <CarouselDot active={selectedSlide === 1 && true} />
      </div>
      <div onClick={() => setSelectedSlide(2)}>
        <CarouselDot active={selectedSlide === 2 && true} />
      </div>
      {userIsLoggedIn && (
        <div onClick={() => setSelectedSlide(3)}>
          <CarouselDot active={selectedSlide === 3 && true} />
        </div>
      )}
    </div>
  );
};

export default HeroSliderDotsBox;
