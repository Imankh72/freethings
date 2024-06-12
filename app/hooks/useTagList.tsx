"use client";

import { create } from "zustand";

interface TagListInterface {
  selected: string | null;
  setSelected: (title: string | null) => void;
}

export const useTagList = create<TagListInterface>((set) => ({
  selected: null,
  setSelected: (title) =>
    set({
      selected: title,
    }),
}));
