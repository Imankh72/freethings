"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { ProductDetails } from "@/app/interface/product";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Carousel = ({ data: product }: { data: ProductDetails }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      {product?.title && (
        <div className="relative">
          <Swiper
            spaceBetween={10}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Pagination, Thumbs]}
            className="primary__pdp-carousel"
          >
            {product?.productGalleryList.map(({ id, fileName, fileUrl }) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col justify-center cursor-pointer">
                  <Image
                    className="rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[10px] rounded-br-[10px] mb-2 object-cover lg:mb-4"
                    src={fileUrl}
                    alt={fileName}
                    width={917}
                    height={577}
                  />
                </div>
              </SwiperSlide>
            ))}
            <span className="new__label">new</span>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="primary__pdp-carousel--gallery"
          >
            {product?.productGalleryList.map(({ id, fileName, fileUrl }) => (
              <SwiperSlide key={id}>
                <Image
                  className="rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[10px] rounded-br-[10px] mb-2 cursor-pointer object-cover"
                  src={fileUrl}
                  alt={fileName}
                  width={222}
                  height={127}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Carousel;
