import { create } from "zustand";

interface UseSpottingModalInterface {
  currentSpotting: number;
  setCurrentSpotting: (value: number) => void;
}

export const useSpottingModal = create<UseSpottingModalInterface>((set) => ({
  currentSpotting: 0,
  setCurrentSpotting: (value) => set({ currentSpotting: value }),
}));
