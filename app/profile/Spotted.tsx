"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { useProducts } from "../hooks/useProducts";
import Loading from "../components/Loading";

import "swiper/css";
import "swiper/css/navigation";

interface SpottedProp {
  isSpotted: boolean;
  isLongWidth?: boolean;
}

const Spotted = ({ isSpotted }: SpottedProp) => {
  const { getUserSpotProductList } = useProducts();

  const { data, isLoading } = useQuery({
    queryKey: ["getSpotted"],
    queryFn: getUserSpotProductList,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="pl-[15px] bg-[#F9F7F1] rounded-l-[20px] flex items-center gap-x-[15px] w-full mb-[10px] max-width lg:rounded-[20px] lg:pl-[30px] lg:relative lg:z-20">
      {isSpotted && (
        <>
          <div className="leading-[18px] font-medium">Spotted</div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={8}
            loop={false}
            navigation={true}
            modules={[Navigation]}
            className="spotted"
          >
            {data?.map(({ id, imageUrl, categoryTitle }) => (
              <SwiperSlide key={id}>
                <Link href="/" key={id} className="flex flex-col flex-none">
                  <Image
                    alt={categoryTitle}
                    src={imageUrl}
                    className={`w-[60px] h-[60px] rounded-full ${
                      id > 2 ? "grayscale" : "border-2 border-[#FBBC1D]"
                    }`}
                    width={60}
                    height={60}
                  />
                  <span className="text-[8px] leading-[18px] font-medium text-gray-light">
                    10 minutes ago
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      {!isSpotted && (
        <div className="flex flex-col gap-y-3 items-center py-3 lg:flex-row lg:justify-between lg:w-full lg:pr-[30px] lg:py-6">
          <div className="flex flex-col gap-y-3 items-center lg:flex-row lg:gap-x-[50px]">
            <h4 className="text-green-main text-[18px] leading-[13px] font-medium lg:text-[26px] lg:leading-[20px]">
              No Spotted Items
            </h4>
            <p className="text-[12px] leading-[18px] font-light text-center lg:text-left lg:text-[16px] lg:leading-[18px]">
              Download the app or use your mobile device and start helping
              abandoned things get a new life.
            </p>
          </div>
          <button
            type="button"
            className="text-[12px] leading-[13px] font-medium flex items-center justify-center border border-gray-main rounded-[50px] px-[10px] py-2"
          >
            Lean More
          </button>
        </div>
      )}
    </div>
  );
};

export default Spotted;
