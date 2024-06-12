import Image from "next/image";
import Link from "next/link";

interface Prop {
  image: string;
  title: string;
  city: string;
  lastUpdated: string;
}

const CarouselCard = ({ image, city, lastUpdated, title }: Prop) => {
  return (
    <Link
      href="/"
      className="p-[5px] pb-[20px] bg-white block h-full mb-[13px] rounded-[10px] lg:mb-5 lg:p-[10px] lg:rounded-[20px] lg:pb-[22px]"
    >
      <Image
        className="mb-5"
        src={image}
        alt={title}
        width={366}
        height={222}
      />
      <p className="text-gray-main mb-1 text-[20px] font-bold leading-[24px] px-[10px] lg:mb-3">
        {title}
      </p>
      <div className="flex items-center justify-between px-[10px] text-[12px] font-normal text-[#969696] lg:text-[15px]">
        <span>{city}</span>
        <span>{lastUpdated}</span>
      </div>
    </Link>
  );
};
export default CarouselCard;
