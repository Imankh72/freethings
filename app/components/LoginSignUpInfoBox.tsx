import Image from "next/image";
import Samak from "@/public/images/samak-character.png";

interface LoginSignUpInfoBoxProps {
  formHeading: string;
  title: string;
  text: string;
}

const LoginSignUpInfoBox = ({
  title,
  text,
  formHeading,
}: LoginSignUpInfoBoxProps) => {
  return (
    <div>
      <div className="relative">
        <h4 className="text-[47px] leading-[51.7px] text-green-main font-medium mb-[15px] ml-4 lg:hidden">
          {formHeading}
        </h4>
        <Image
          className="absolute -top-11 right-5 w-[116px] h-[168px] object-cover lg:static lg:block lg:mb-5 lg:w-[167px] lg:h-[241px]"
          src={Samak}
          alt="samak"
          width={167}
          height={241}
        />
        <p className="hidden lg:block text-[31px] leading-[43.4px] font-medium mb-[10px]">
          {text}
        </p>
        <h2 className="hidden lg:block text-[67px] leading-[73.7px] text-blue-main font-medium">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default LoginSignUpInfoBox;
