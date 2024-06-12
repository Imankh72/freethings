"use client";

import { create } from "zustand";

interface UserStateInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const useUser = create<UserStateInterface>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
}));
