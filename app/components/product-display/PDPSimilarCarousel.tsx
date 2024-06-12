import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CarIcon } from "../svgs/CarIcon";
import { ProductCardClockIcon } from "../svgs/ProductCardClockIcon";
import { Location } from "../svgs/Location";

import { Product } from "@/app/interface/product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PDPSimilarCarousel = ({
  data,
  mobile = false,
}: {
  data: Product[];
  mobile?: boolean;
}) => {
  return (
    <>
      {data?.length > 0 && (
        <div className="px-1 flex flex-col text-gray-main max-width lg:relative lg:!z-10 lg:px-20 lg:pb-[50px]">
          <div className="flex items-center gap-x-[10px] px-2 lg:px-0 lg:mb-2 lg:pl-2">
            <h2 className="text-[35px] font-extralight lg:text-[65px]">
              You may also like
            </h2>
          </div>
          <Swiper
            slidesPerView={mobile ? 1 : 4}
            spaceBetween={10}
            slidesPerGroup={mobile ? 1 : 4}
            loop={false}
            navigation={mobile}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map(({ id, title, imageUrl }) => (
              <SwiperSlide key={id}>
                <Link
                  href={`/product-details/${title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}-${id}`}
                  className="flex flex-col justify-center"
                >
                  {imageUrl && (
                    <Image
                      className="rounded-t-[5px] rounded-b-[10px] mb-2 w-full h-[250px] lg:mb-3 lg:w-[334px] lg:h-[240px]"
                      src={imageUrl}
                      alt={title}
                      width={mobile ? 450 : 294}
                      height={mobile ? 250 : 232}
                    />
                  )}
                  <div className="mx-5 lg:mx-2">
                    <h5 className="text-[18px] leading-[30px] font-bold text-left mb-1">
                      {title}
                    </h5>
                    <div className="flex items-center justify-between text-[#969696]">
                      <div className="text-[#969696] text-[12px] leading-[5px] font-medium flex items-center justify-between flex-wrap gap-x-[15px] lg:justify-start lg:gap-x-[15px] lg:gap-y-1">
                        <div className="flex items-center gap-x-[5px]">
                          <ProductCardClockIcon />
                          <span>2 requests</span>
                        </div>
                        <div className="flex items-center gap-x-[5px]">
                          <CarIcon />
                          <span>10 min</span>
                        </div>
                        <div className="flex items-center gap-x-[5px]">
                          <Location isGreen={false} />
                          <span>near by</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default PDPSimilarCarousel;
