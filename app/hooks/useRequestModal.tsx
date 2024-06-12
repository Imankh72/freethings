import { create } from "zustand";

interface UseAddItemRequestModalStore {
  notifyForEveryRequest: 0 | 1;
  isRequestItemModalOpen: boolean;
  isAllRequestsModalOpen: boolean;
  isAcceptRequestModalOpen: boolean;
  isDeliveryRequestModalOpen: boolean;
  handleOnChangeNotifyForEveryRequestBtn: (value: 0 | 1) => void;
  openRequestItemModal: () => void;
  closeRequestItemModal: () => void;
  openAllRequestsModal: () => void;
  closeAllRequestsModal: () => void;
  openAcceptRequestModal: () => void;
  closeAcceptRequestModal: () => void;
  openDeliveryRequestModal: () => void;
  closeDeliveryRequestModal: () => void;
}

export const useRequestModal = create<UseAddItemRequestModalStore>((set) => ({
  notifyForEveryRequest: 0,
  isRequestItemModalOpen: false,
  isAllRequestsModalOpen: false,
  isAcceptRequestModalOpen: false,
  isDeliveryRequestModalOpen: false,
  handleOnChangeNotifyForEveryRequestBtn: (value: 0 | 1) =>
    set(() => ({ notifyForEveryRequest: value })),
  openRequestItemModal: () => set(() => ({ isRequestItemModalOpen: true })),
  closeRequestItemModal: () => set(() => ({ isRequestItemModalOpen: false })),
  openAllRequestsModal: () => {
    set(() => ({ isAllRequestsModalOpen: true })),
      document.body.classList.add("overflow-hidden");
  },
  closeAllRequestsModal: () => {
    set(() => ({ isAllRequestsModalOpen: false })),
      document.body.classList.remove("overflow-hidden");
  },
  openAcceptRequestModal: () => {
    set(() => ({ isAcceptRequestModalOpen: true })),
      document.body.classList.add("overflow-hidden");
  },
  closeAcceptRequestModal: () => {
    set(() => ({ isAcceptRequestModalOpen: false })),
      document.body.classList.remove("overflow-hidden");
  },
  openDeliveryRequestModal: () => {
    set(() => ({ isDeliveryRequestModalOpen: true })),
      document.body.classList.add("overflow-hidden");
  },
  closeDeliveryRequestModal: () => {
    set(() => ({ isDeliveryRequestModalOpen: false })),
      document.body.classList.remove("overflow-hidden");
  },
}));
