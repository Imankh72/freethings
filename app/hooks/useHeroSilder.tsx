import { create } from "zustand";

interface UseHeroSliderInterface {
  selectedSlide: 1 | 2 | 3;
  setSelectedSlide: (value: 1 | 2 | 3) => void;
}

export const useHeroSlider = create<UseHeroSliderInterface>((set) => ({
  selectedSlide: 1,
  setSelectedSlide(value) {
    set({ selectedSlide: value });
  },
}));
