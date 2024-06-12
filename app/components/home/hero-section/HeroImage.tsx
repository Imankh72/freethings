import Image from "next/image";

import samak from "@/public/images/samak-character.png";

const HeroImage = () => {
  return (
    <Image
      className="w-[438px] h-[570px]"
      src={samak}
      alt="samak"
      width={438}
      height={570}
    />
  );
};
export default HeroImage;
