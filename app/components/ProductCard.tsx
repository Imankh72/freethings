import Image from "next/image";
import Link from "next/link";
import { Location } from "./svgs/Location";
import { ProductCardClockIcon } from "./svgs/ProductCardClockIcon";
import { CarIcon } from "./svgs/CarIcon";

interface ProductCard {
  id: number;
  title: string;
  image: string;
  description?: string;
  categoryTitle?: string;
  city?: null | string;
  latitude?: number;
  longitude?: number;
  condition?: number;
  pickupToday?: number;
  imageName?: string;
  imageUrl?: string;
  similarity?: number;
}

const ProductCard = ({ image, title, id }: ProductCard) => {
  return (
    <Link
      href={`/product-details/${title
        ?.replace(/\s+/g, "-")
        ?.toLowerCase()}-${id}`}
      className="rounded-tl-[10px] rounded-tr-[10px] overflow-hidden w-full lg:p-2 lg:pb-5 lg:bg-white lg:w-full lg:relative lg:rounded-[15px] lg:rounded-br-[10px] lg:rounded-bl-[10px]"
    >
      <Image
        className="w-full h-[170px] mb-[10px] rounded-[10px] lg:w-full lg:h-[312px]"
        src={image}
        alt={title}
        width={447}
        height={312}
      />
      <div className="lg:px-5">
        <p className="text-[14px] leading-[16.8px] font-bold mb-[6px] lg:text-[22px] lg:leading-[30px]">
          {title}
        </p>
        <div className="text-[#969696] text-[10px] leading-[5px] font-medium flex items-center justify-between flex-wrap lg:text-[16px] lg:justify-start lg:gap-x-[15px]">
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
            <span>Nearby</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
