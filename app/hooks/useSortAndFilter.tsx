"use client";

import { create } from "zustand";

interface SortAndFilterInterface {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const useSortAndFilter = create<SortAndFilterInterface>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
