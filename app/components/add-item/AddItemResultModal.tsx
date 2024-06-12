import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import HomeIcon from "../svgs/HomeIcon";
import ToggleBtn from "./ToggleBtn";
import PlusIcon from "../svgs/PlusIcon";
import AngleSamak from "@/public/images/angle-samak.png";
import { useRequestModal } from "@/app/hooks/useRequestModal";
import { useAddItem } from "@/app/hooks/useAddItem";
import Samak from "@/public/images/samak-character.png";
import { useOutsideClick } from "@/app/hooks/useClickOutside";

const AddItemResultModal = () => {
  const { isResultAddItemModalOpen, closeResultAddItemModal } = useAddItem();
  const { notifyForEveryRequest, handleOnChangeNotifyForEveryRequestBtn } =
    useRequestModal();

  const router = useRouter();
  const ref = useOutsideClick(() => closeResultAddItemModal());

  // const handleOnClick = () => {
  //   if (notifyForEveryRequest === 0) {
  //     handleOnChangeNotifyForEveryRequestBtn(1);
  //     return;
  //   }
  //   handleOnChangeNotifyForEveryRequestBtn(0);
  // };

  const handleOnClick = () => {
    router.push("/profile/my-listings");
    closeResultAddItemModal();
  };

  return (
    <AnimatePresence>
      {isResultAddItemModalOpen && (
        <motion.div
          className={` ${
            isResultAddItemModalOpen
              ? "block lg:request-modal__overlay"
              : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="bg-white h-screen w-screen p-5 pt-[400px] flex flex-col gap-y-[110px] fixed top-0 left-0 z-[99999] overflow-y-scroll max-width lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:h-[549px] lg:pt-0 lg:flex-row lg:gap-x-20 lg:items-center lg:justify-center lg:rounded-[20px] lg:w-[75%] 2xl:w-screen"
            ref={ref}
          >
            <Image
              src={Samak}
              alt="samak"
              width={353}
              height={448}
              className="hidden lg:inline-block"
            />
            <div className="lg:flex lg:flex-col lg:items-center lg:gap-y-5">
              <div className="flex flex-col justify-end gap-y-[10px] relative mt-[100px] text-[50px] leading-[57px] lg:flex lg:text-[60px] lg:leading-[72px] lg:mt-0 lg:flex-row">
                <h3>You’re </h3>
                <h3>
                  <span className="font-bold text-[#FF823F]">a</span>
                  <span className="font-bold text-[#1977F2]">l</span>
                  <span className="font-bold text-[#0ECAF6]">l</span>
                  <span className="font-bold text-green-main">s</span>
                  <span className="font-bold text-[#FFB800]">et</span>
                  <span className="font-bold text-[#1977F2]">!</span>
                </h3>
                {/* <div className="flex items-center justify-between lg:hidden">
                  <p className="text-[14px] leading-[24px]">
                    notify me on each request
                  </p>
                  <ToggleBtn
                    toggle={notifyForEveryRequest}
                    handleOnClick={handleOnClick}
                    activeColor="blue"
                  />
                </div> */}
                <Image
                  src={AngleSamak}
                  alt="angle-samak"
                  className="absolute -right-[6.5rem] bottom-24 lg:hidden"
                />
              </div>
              <div className="flex flex-col items-center gap-y-[10px] py-5 px-[15px]">
                <Link href="/add-item" className="add-item__result__modal__btn">
                  <PlusIcon />
                  <span className="text-[18px] leading-[23px]">
                    add a new listing
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={handleOnClick}
                  className="add-item__result__modal__btn"
                >
                  <HomeIcon />
                  <span className="text-[18px] leading-[23px]">
                    go to my listings
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddItemResultModal;
