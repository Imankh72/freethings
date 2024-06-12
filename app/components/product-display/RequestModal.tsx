"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DatePicker from "../DatePicker";
import { useOutsideClick } from "@/app/hooks/useClickOutside";
import { useRequestModal } from "@/app/hooks/useRequestModal";

interface RequestModalProps {
  fromDate: string;
  toDate: string;
}

const RequestModal = ({ fromDate, toDate }: RequestModalProps) => {
  const { isRequestItemModalOpen, closeRequestItemModal } = useRequestModal();
  const [selectedTime, setSelectedTime] = useState<Boolean>(false);
  const ref = useOutsideClick(() => closeRequestItemModal());

  return (
    <AnimatePresence>
      {isRequestItemModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`request-modal__overlay ${
            isRequestItemModalOpen ? "flex opacity-100" : "hidden opacity-0"
          }`}
        >
          <div
            className="absolute left-0 bottom-0 bg-white p-5 rounded-t-[35px] w-[100vw] flex flex-col gap-y-[15px]"
            ref={ref}
          >
            <div className="flex items-center justify-between pl-4 pr-[6px] rounded-[20px] border border-[#EBEBEB]">
              <span className="text-[14px] leading-[24px] whitespace-nowrap">
                Select earliest date and time
              </span>
              <div className="switch-box">
                <input type="checkbox" className="switch-input" />
              </div>
            </div>
            <span className="text-[18px] leading-[24px] pl-[11px]">
              Choose one of available dates
            </span>
            <DatePicker fromDate={fromDate} toDate={toDate} />
            <button
              type="button"
              className={`text-[18px] leading-[23px] py-[18px] px-[50px] w-[95%] h-16 border-2 border-solid border-transparent opacity-80 flex items-center justify-center rounded-[70px] mx-auto ${
                selectedTime
                  ? "mobile__menu__gradient bg-[#000000cc] text-white"
                  : "bg-[#D2D2D2] text-gray-light"
              }`}
              disabled={selectedTime ? true : false}
            >
              request this item
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestModal;
