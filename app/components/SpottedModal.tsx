"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useOutsideClick } from "../hooks/useClickOutside";
import { Campaign } from "../interface/campaign";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useSpottingModal } from "../hooks/useSpottingModal";
import { LeftArrow } from "./svgs/LeftArrow";
import { CloseIcon } from "./svgs/CloseIcon";
import { BreadCrumbSeparator } from "./svgs/BreadCrumbSeparator";

const DynamicMap = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
});

import "swiper/css";
import "swiper/css/navigation";
import React from "react";

interface SpottedModalProps {
  data: Campaign[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SpottedModal = ({ data, setIsOpen, isOpen }: SpottedModalProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { currentSpotting, setCurrentSpotting } = useSpottingModal();
  const ref = useOutsideClick(() => handleOnClick());

  const handleOnClick = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={isOpen ? "block request-modal__overlay" : "hidden"}
        >
          <div
            className="bg-white w-screen h-screen !relative !z-[60] flex flex-col items-center lg:w-[1200px] lg:h-[691px] lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[30px] lg:p-[10px]"
            ref={ref}
          >
            {data[0].productList.length > 0 && (
              <div className="lg:flex lg:w-full lg:h-[671px]">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  autoplay={{
                    delay: 15000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".review-swiper-button-next",
                    prevEl: ".review-swiper-button-prev",
                  }}
                  initialSlide={currentSpotting}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Thumbs, Navigation, Autoplay]}
                  className="spotted-modal__carousel"
                  onSlideChange={(s) => setCurrentSpotting(s.activeIndex)}
                >
                  {data[0].productList.map(({ id, imageUrl, imageName }) => (
                    <SwiperSlide key={id}>
                      <Image
                        className="h-full object-cover"
                        src={imageUrl}
                        alt={imageName || ""}
                        width={748}
                        height={671}
                      />
                    </SwiperSlide>
                  ))}
                  <div className="hidden lg:w-[400px] lg:flex lg:items-center lg:gap-x-8 lg:mb-[10px] lg:absolute lg:right-[10px] lg:top-[10px] lg:z-[99999]">
                    <div className="flex items-center justify-between flex-[4]">
                      <button
                        type="button"
                        className="flex items-center gap-x-[3px] text-[14px] leading-[18px] font-medium review-swiper-button-prev"
                      >
                        <BreadCrumbSeparator mobile />
                        Previous
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-x-[3px] text-[14px] leading-[18px] font-medium review-swiper-button-next"
                      >
                        Next
                        <div className="rotate-180">
                          <BreadCrumbSeparator mobile />
                        </div>
                      </button>
                    </div>
                    <div className="flex-1 mr-2">
                      <button
                        type="button"
                        className="text-[14px] leading-[18px] font-medium flex items-center justify-center pl-3 py-[2px] rounded-[30px] border border-black"
                        onClick={handleOnClick}
                      >
                        Close
                        <CloseIcon />
                      </button>
                    </div>
                  </div>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  initialSlide={currentSpotting}
                  spaceBetween={5}
                  slidesPerView={data[0].productList.length}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="spotted-modal__carousel--gallery"
                >
                  {data[0].productList.map(({ id }) => (
                    <SwiperSlide key={id}></SwiperSlide>
                  ))}
                </Swiper>
                <div>
                  <DynamicMap
                    id={data[0]?.productList[currentSpotting]?.id}
                    title={data[0]?.productList[currentSpotting]?.title}
                    latitude={data[0]?.productList[currentSpotting]?.latitude}
                    longitude={data[0]?.productList[currentSpotting]?.longitude}
                    image={data[0]?.productList[currentSpotting]?.imageUrl}
                  />
                </div>
                <div className="absolute top-4 left-0 w-full flex items-center justify-between z-50 px-2 lg:top-8 lg:left-[initial] lg:-right-[42rem]">
                  <div
                    className="flex items-center justify-center w-6 h-6 lg:hidden"
                    onClick={handleOnClick}
                  >
                    <LeftArrow />
                  </div>
                  <div className="flex items-center gap-x-4 text-[13px] leading-[20px] text-white">
                    <span>
                      {data[0]?.productList[currentSpotting]?.createdTime}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[18px] leading-[23px] text-white rounded-[70px] border-[1.5px] border-transparent h-16 flex items-center justify-center absolute bottom-4 left-1/2 -translate-x-1/2 mobile__menu__gradient opacity-80 z-[80] w-[90%] px-[50px] py-[18px] lg:w-[338px] lg:left-[initial] lg:-translate-x-0 lg:right-9 lg:bottom-8"
                >
                  Get Directions
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpottedModal;
