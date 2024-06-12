import { ChangeEvent } from "react";
import { create } from "zustand";
import { AddItemFormInputs } from "../interface/addItemForm";

interface UseAddItemInterface {
  inputValues: AddItemFormInputs;
  previewPhotos: string[];
  isResultAddItemModalOpen: boolean;
  selectedDays: Date[];
  isSpecificTime: boolean;
  setIsSpecificTime: (value: boolean) => void;
  setPreviewPhotos: (value: string, id: number) => void;
  setSelectedDays: (value: Date[]) => void;
  handleOnChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setPhoto: (value: string, id: number) => void;
  setDate: (startDate: string, endDate: string) => void;
  setTime: (timeTitle: "fromTime" | "toTime", value: string) => void;
  setLocation: (lat: number, lng: number) => void;
  handleOnChangeToggleBtn: (value: 0 | 1) => void;
  handleOnClickRadioBtn: (value: 1 | 2 | 3, name: string) => void;
  openResultAddItemModal: () => void;
  closeResultAddItemModal: () => void;
  setCategoryTitle: (value: string) => void;
  setCategoryId: (value: number) => void;
}

export const useAddItem = create<UseAddItemInterface>((set) => ({
  inputValues: {
    title: "",
    productGalleryList: [],
    categoryTitle: "",
    description: "",
    status: 0,
    brand: "",
    condition: 0,
    weightType: 0,
    pickupType: 0,
    floorNo: 1,
    useElevator: 0,
    fromDate: "",
    toDate: "",
    dateList: "",
    fromTime: "",
    toTime: "",
    latitude: 0,
    longitude: 0,
    address: "",
    address2: "asf",
  },
  isSpecificTime: false,
  previewPhotos: [],
  selectedDays: [],
  isResultAddItemModalOpen: false,
  setSelectedDays: (value) => set({ selectedDays: value }),
  handleOnChangeInput: (e) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        [e.target.name]: e.target.value,
      },
    })),
  setPhoto: (value: string, id: number) => {
    set((state) => {
      const newPhotos = [...state.inputValues.productGalleryList];
      newPhotos[id - 1] = {
        fileType: 1,
        isDefault: id === 1 ? 1 : 0,
        image: value,
      };
      return {
        inputValues: {
          ...state.inputValues,
          productGalleryList: newPhotos,
        },
      };
    });
  },
  setPreviewPhotos: (value: string, id: number) =>
    set((state) => {
      const newPhotos = [...state.previewPhotos];
      newPhotos[id - 1] = value;
      return {
        previewPhotos: newPhotos,
      };
    }),
  setCategoryId: (value) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        categoryId: value,
      },
    })),
  setDate: (startDate: string, endDate: string) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        fromDate: startDate,
        toDate: endDate,
      },
    })),
  setTime: (time, value) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        [time]: value,
      },
    })),
  setLocation: (lat, lng) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        latitude: lat,
        longitude: lng,
      },
    })),
  setCategoryTitle: (value: string) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        categoryTitle: value,
      },
    })),
  handleOnChangeToggleBtn: (value: 0 | 1) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        useElevator: value,
      },
    })),
  handleOnClickRadioBtn: (value: 1 | 2 | 3, name: string) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        [name]: value,
      },
    })),
  openResultAddItemModal: () => {
    set(() => ({ isResultAddItemModalOpen: true })),
      document.body.classList.add("overflow-hidden");
  },
  closeResultAddItemModal: () => {
    set(() => ({ isResultAddItemModalOpen: false })),
      document.body.classList.remove("overflow-hidden");
  },
  setIsSpecificTime: (value) => set({ isSpecificTime: value }),
}));
