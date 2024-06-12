import { ReactNode } from "react";
import { RightArrowSocial } from "./svgs/RightArrowSocial";

interface LoginSignUpSocialBtnProps {
  text: string;
  icon: ReactNode;
}

const LoginSignUpSocialBtn = ({ icon, text }: LoginSignUpSocialBtnProps) => {
  return (
    <button
      type="button"
      className="login-sign-up__social__btn flex items-center justify-between text-[14px] leading-[17px] p-[5px] h-10 w-full border border-gray-light rounded-[30px]"
    >
      {icon} <span>{text}</span> <RightArrowSocial />
    </button>
  );
};

export default LoginSignUpSocialBtn;
