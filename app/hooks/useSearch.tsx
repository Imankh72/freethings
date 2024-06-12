import { create } from "zustand";

interface UseSearchInterface {
  searchValue: string;
  maxPages: number;
  setSearchValue: (value: string) => void;
  setMaxPages: (value: number) => void;
}

export const useSearch = create<UseSearchInterface>((set) => ({
  searchValue: "",
  maxPages: 5,
  setSearchValue: (value) => {
    set({ searchValue: value });
  },
  setMaxPages: (value) => {
    set((state) => ({
      maxPages: state.maxPages + value,
    }));
  },
}));
