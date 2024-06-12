import Image from "next/image";
import Avatar from "@/public/images/avatar.png";
import RatingStar from "./svgs/RatingStar";

interface AvatarBoxProp {
  imageSize?: string;
  displayName?: string;
}

const AvatarBox = ({ imageSize, displayName }: AvatarBoxProp) => {
  return (
    <div className="text-gray-main flex items-center gap-x-2">
      <div>
        <Image
          className={`rounded-full ${
            imageSize ? imageSize : "w-[70px] h-[70px]"
          }`}
          src={Avatar}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[18px] font-bold leading-[24px] mb-[6px] lg:text-[30px]">
          {displayName ? displayName : "user"}
        </span>
        <div className="flex items-center gap-x-1 -mt-1">
          <div className="flex items-center gap-x-[2px]">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
          </div>
          <span className="text-[10px] font-medium mt-[2px] lg:text-[14px] leading-[11px]">
            13
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvatarBox;
