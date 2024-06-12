import Image from "next/image";
import Link from "next/link";
import { ProductCardClockIcon } from "../svgs/ProductCardClockIcon";
import { CarIcon } from "../svgs/CarIcon";
import { Location } from "../svgs/Location";

import { CarouselProps } from "@/app/interface/carousel";

const SecondaryCarousel = ({
  data,
  title,
  titleImage,
  small = false,
}: CarouselProps) => {
  return (
    <>
      {data?.productList.length > 0 && (
        <>
          <div className="flex items-center gap-x-[10px] px-2 mt-[38px] mb-[14px]">
            {titleImage && (
              <Image
                src={titleImage}
                alt={title}
                className="object-cover w-6 h-6 lg:w-11 lg:h-11"
                width={24}
                height={24}
              />
            )}
            <h2 className="text-[35px] font-extralight">{title}</h2>
          </div>
          <div className="w-full flex overflow-x-scroll items-center gap-x-[10px] px-[10px] text-gray-main relative z-20">
            {data.productList.map(({ id, imageUrl, title }) => (
              <Link
                key={id}
                href={`/product-details/${title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}-${id}`}
                className={`flex-none rounded-[20px] relative z-10 ${
                  small
                    ? "w-[140px] h-[242px] bg-gray-100"
                    : "w-[243px] h-[248px] bg-white pb-1"
                }`}
              >
                <Image
                  className={` mb-2 !w-full flex-none object-cover ${
                    small
                      ? "w-[140px] h-[140px] rounded-[10px]"
                      : "h-[183px] rounded-t-[10px] rounded-b-[2px]"
                  }`}
                  src={imageUrl}
                  alt={title}
                  width={243}
                  height={small ? 140 : 183}
                />
                <div className="px-[6px] pb-2">
                  <h5 className="text-[18px] leading-[20px] font-bold text-left mb-[2px]">
                    {title}
                  </h5>
                  <div className="flex items-center justify-between text-[#969696]">
                    <div
                      className={`text-[#969696] leading-[5px] font-medium flex items-center flex-wrap lg:justify-start lg:gap-x-[15px] lg:gap-y-1 ${
                        small
                          ? "text-[10px] justify-between"
                          : "text-[12px] gap-x-[6px]"
                      }`}
                    >
                      <div className="flex items-center gap-x-[5px] whitespace-nowrap">
                        <ProductCardClockIcon />
                        <span>2 requests</span>
                      </div>
                      <div className="flex items-center gap-x-[5px] whitespace-nowrap">
                        <CarIcon />
                        <span>10 min</span>
                      </div>
                      <div className="flex items-center gap-x-[5px] whitespace-nowrap">
                        <Location isGreen={false} />
                        <span>near by</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SecondaryCarousel;
