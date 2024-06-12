"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FavoriteIcon } from "../svgs/FavoriteIcon";

import { ProductDetails } from "@/app/interface/product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SecondaryPDPCarousel = ({ data: product }: { data: ProductDetails }) => {
  return (
    <>
      {product?.title.length > 0 && (
        <div className="text-gray-main relative max-width lg:z-50 lg:px-0 lg:pb-[50px] lg:mb-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="secondary__pdp-carousel"
          >
            {product?.productGalleryList.map(({ id, fileName, fileUrl }) => (
              <SwiperSlide key={id}>
                <Link href="/" className="flex flex-col justify-center h-full">
                  <Image
                    className="rounded-[10px] object-cover w-full h-full lg:mb-4"
                    src={fileUrl}
                    alt={fileName}
                    width={374}
                    height={253}
                  />
                  <div className="absolute top-0 right-0">
                    <FavoriteIcon />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <span className="new__label bottom-7">new</span>
        </div>
      )}
    </>
  );
};

export default SecondaryPDPCarousel;
