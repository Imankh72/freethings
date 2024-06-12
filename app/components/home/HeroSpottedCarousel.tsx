"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SpottedModal from "@/app/components/SpottedModal";
import { Campaign } from "@/app/interface/campaign";
import { useSpottingModal } from "@/app/hooks/useSpottingModal";
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  data: Campaign[];
  mobile?: boolean;
}

const HeroSpottedCarousel = ({ data, mobile = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setCurrentSpotting } = useSpottingModal();
  const handleOnClick = (id: number) => {
    setIsOpen(true);
    setCurrentSpotting(id);
    document.body.classList.add("overflow-hidden");
  };

  return (
    <>
      {data && data[0]?.productList?.length > 0 && mobile ? (
        <div className="pl-[15px] bg-[#F9F7F1] rounded-l-[20px] flex items-center gap-x-[15px] w-full max-width mt-10 lg:hidden">
          <div className="leading-[18px] font-medium">Spotted</div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={8}
            loop={false}
            modules={[Navigation]}
            className="spotted"
          >
            {data[0]?.productList.map(
              ({ id, imageUrl, condition, imageName, createdTime }, index) => (
                <SwiperSlide key={id}>
                  <div key={id} className="flex flex-col flex-none">
                    <Image
                      alt={imageName || ""}
                      src={imageUrl}
                      className={`w-[60px] h-[60px] rounded-full ${
                        condition !== 1
                          ? "grayscale"
                          : "border-2 border-[#FBBC1D]"
                      }`}
                      width={60}
                      height={60}
                      onClick={() => handleOnClick(index)}
                    />
                    <span className="text-[8px] leading-[18px] font-medium text-gray-light">
                      {createdTime}
                    </span>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      ) : (
        data &&
        data[0]?.productList?.length > 0 && (
          <div className="hidden max-width rounded-[40px] lg:block lg:py-[30px] lg:mt-10 lg:px-20 lg:relative lg:z-10">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-[65px] font-light leading-[30px]">
                Spotted near you
              </h2>
              <p className="text-[25px] leading-[10px] text-green-main">
                What is Spotting?
              </p>
            </div>
            <Swiper
              slidesPerView={5}
              initialSlide={0}
              spaceBetween={8}
              slidesPerGroup={5}
              loop={false}
              className="hero-spotted__carousel"
              navigation={{
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
              }}
              modules={[Navigation]}
            >
              <button
                type="button"
                className="absolute top-1/2 left-8 review-swiper-button-prev disabled:hidden"
              >
                <LeftArrow />
              </button>
              {data[0]?.productList.map(
                ({ id, imageUrl, imageName, createdTime }, index) => (
                  <SwiperSlide key={id}>
                    <div className="flex flex-col items-center gap-y-[23px]">
                      <Image
                        className="cursor-pointer"
                        src={imageUrl}
                        alt={imageName || "image"}
                        width={230}
                        height={230}
                        onClick={() => handleOnClick(index)}
                      />
                      <span className="leading-[13px]">{createdTime}</span>
                      <button
                        type="button"
                        className="flex items-center justify-center px-[30px] py-[14px] text-[15px] leading-[10px] font-medium rounded-[10px] border border-gray-main"
                      >
                        Get Direction
                      </button>
                    </div>
                  </SwiperSlide>
                )
              )}
              <button
                type="button"
                className="absolute top-1/2 right-8 review-swiper-button-next disabled:hidden"
              >
                <RightArrow />
              </button>
            </Swiper>
          </div>
        )
      )}
      <SpottedModal data={data} setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default HeroSpottedCarousel;
