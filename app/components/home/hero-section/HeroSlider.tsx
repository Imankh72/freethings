"use client";

import PrimaryHero from "./PrimaryHero";
import SecondaryHero from "./SecondaryHero";
import LoggedInHero from "./LoggedInHero";
import { useHeroSlider } from "@/app/hooks/useHeroSilder";
import { useUser } from "@/app/hooks/useUser";

const HeroSlider = () => {
  const { selectedSlide } = useHeroSlider();
  const { isLoggedIn } = useUser();

  return (
    <>
      {selectedSlide === 1 && <PrimaryHero />}
      {selectedSlide === 2 && <SecondaryHero />}
      {selectedSlide === 3 && isLoggedIn && <LoggedInHero />}
    </>
  );
};
export default HeroSlider;
