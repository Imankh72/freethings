"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Samak from "@/public/images/samak-character.png";
import { useOutsideClick } from "@/app/hooks/useClickOutside";
import { BreadCrumbSeparator } from "../../svgs/BreadCrumbSeparator";
import { CloseIcon } from "../../svgs/CloseIcon";
import { useRequestModal } from "@/app/hooks/useRequestModal";

const DeliveryRequestModal = () => {
  const { isDeliveryRequestModalOpen, closeDeliveryRequestModal } =
    useRequestModal();

  const ref = useOutsideClick(() => closeDeliveryRequestModal());
  return (
    <AnimatePresence>
      {isDeliveryRequestModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={
            isDeliveryRequestModalOpen ? "request-modal__overlay" : "hidden"
          }
        >
          <div
            className="p-5 bg-white rounded-t-[35px] fixed left-1/2 -translate-x-1/2 bottom-0 w-full pt-44 lg:pt-[14px] lg:w-[1180px] lg:top-1/2 lg:-translate-y-1/2 lg:rounded-[35px] lg:flex lg:flex-col lg:gap-y-[6px] lg:h-[399px]"
            ref={ref}
          >
            <div className="hidden lg:flex justify-end gap-x-[25px] pr-[25px] -mt-1">
              <div className="flex gap-x-[23px]">
                <button
                  type="button"
                  className="flex items-center gap-x-[3px] text-[14px] leading-[18px] font-medium"
                >
                  <BreadCrumbSeparator mobile />
                  Previous Listing
                </button>
                <button
                  type="button"
                  className="flex items-center gap-x-[3px] text-[14px] leading-[18px] font-medium"
                >
                  Next Listing
                  <div className="rotate-180">
                    <BreadCrumbSeparator mobile />
                  </div>
                </button>
              </div>
              <button
                type="button"
                className="text-[14px] leading-[18px] font-medium flex items-center justify-center pl-3 py-[2px] rounded-[30px] border border-black"
                onClick={() => closeDeliveryRequestModal()}
              >
                Close
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col items-center justify-end w-full h-full lg:flex-row lg:bg-[#EFF3F6] lg:rounded-[20px] lg:px-[15px] lg:justify-end lg:items-center lg:pr-7">
              <Image
                src={Samak}
                className="absolute left-1/2 -translate-x-1/2 -top-24 w-[221px] h-[281px] lg:w-[387px] lg:h-[493px] lg:left-60 lg:-top-8"
                alt="samak"
                width={387}
                height={493}
              />
              <div className="text-center">
                <h2 className="text-[40px] leading-[77px] font-bold px-[10px] lg:text-center lg:text-[50px] lg:leading-[77px] mb-[19px]">
                  Request Sent!
                </h2>
                <div className="px-10 flex items-center justify-center mb-[29px] lg:justify-start lg:px-0 lg:mb-10">
                  <p className="text-[12px] leading-[20px] text-center lg:text-left lg:text-[20px] lg:leading-[20px] lg:whitespace-nowrap">
                    You will be notified via email when the gifter accepts your
                    request
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-[10px]">
                  <button type="button" className="delivery-request__btn">
                    see all my requests
                  </button>
                  <button type="button" className="delivery-request__btn">
                    browse more items
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeliveryRequestModal;
