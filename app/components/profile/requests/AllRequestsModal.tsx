"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileAllRequestsModal from "./MobileAllRequestsModal";
import DesktopAllRequestsModal from "./DesktopAllRequestsModal";
import { useOutsideClick } from "@/app/hooks/useClickOutside";
import { useRequestModal } from "@/app/hooks/useRequestModal";

const AllRequestsModal = () => {
  const [ref, setRef] = useState(null);
  const allRequestsModalRef = useOutsideClick(() => closeAllRequestsModal());
  const {
    isAllRequestsModalOpen,
    isAcceptRequestModalOpen,
    closeAllRequestsModal,
  } = useRequestModal();

  useEffect(() => {
    if (!isAcceptRequestModalOpen && isAllRequestsModalOpen) {
      setRef(allRequestsModalRef);
    }
    if (isAcceptRequestModalOpen && isAllRequestsModalOpen) {
      setRef(null);
    }
  }, [
    isAcceptRequestModalOpen,
    allRequestsModalRef,
    isAllRequestsModalOpen,
    ref,
  ]);

  return (
    <AnimatePresence>
      {isAllRequestsModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={
            isAllRequestsModalOpen
              ? "block lg:request-modal__overlay"
              : "hidden"
          }
        >
          <div className="all-requests__modal" ref={ref}>
            <MobileAllRequestsModal />
            <DesktopAllRequestsModal />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AllRequestsModal;
