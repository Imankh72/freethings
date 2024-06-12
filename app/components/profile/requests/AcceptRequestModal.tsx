"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/useClickOutside";
import { useRequestModal } from "@/app/hooks/useRequestModal";

const AcceptRequestModal = () => {
  const {
    isAllRequestsModalOpen,
    isAcceptRequestModalOpen,
    closeAllRequestsModal,
    closeAcceptRequestModal,
    openDeliveryRequestModal,
  } = useRequestModal();

  const ref = useOutsideClick(() => closeAcceptRequestModal());

  const handleAcceptButtonClick = () => {
    closeAcceptRequestModal();
    openDeliveryRequestModal();
    closeAllRequestsModal();
  };

  return (
    <AnimatePresence>
      {isAcceptRequestModalOpen && isAllRequestsModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={
            isAcceptRequestModalOpen ? "request-modal__overlay" : "hidden"
          }
        >
          <div
            className="bg-white p-[25px] pb-5 rounded-[20px] flex flex-col gap-y-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            ref={ref}
          >
            <div className="flex items-center gap-x-5">
              <Image
                src="/images/pickup-1.png"
                className="w-[90px] h-[90px]"
                alt="picture"
                width={90}
                height={90}
              />
              <p className="text-[15px] font-medium">
                By accepting the request, we Will inform Vivian to pick it up
                tomorrow at 7:00.
              </p>
            </div>
            <div className="flex items-center gap-x-[10px] text-[14px] font-medium">
              <button
                type="button"
                className="bg-green-main text-white flex items-center px-[35px] rounded-[50px] py-[15px] whitespace-nowrap"
                onClick={handleAcceptButtonClick}
              >
                Yes, let them know
              </button>
              <button
                type="button"
                className="flex items-center px-[19px] rounded-[50px] py-[15px]"
                onClick={closeAcceptRequestModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AcceptRequestModal;
