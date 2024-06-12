import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import PenIcon from "../../svgs/PenIcon";

interface EmailInputBoxProp {
  error: FieldError | undefined;
  register: UseFormRegister<{
    email?: string;
  }>;
}

const EmailInputBox = ({ register, error }: EmailInputBoxProp) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  return (
    <div
      className={`relative z-10 p-4 bg-white rounded-[20px] flex justify-between ${
        !isDisabled
          ? "flex-col gap-y-4 items-start lg:flex-row lg:items-center"
          : "items-center gap-x-4"
      }`}
    >
      <div className="flex flex-col w-full gap-y-2">
        {!isDisabled && (
          <>
            <span className="text-[14px] leading-[20px] font-medium lg:text-[16px]">
              Email
            </span>
            <input
              type="email"
              className="inline-block px-[14px] py-[9px] bg-transparent rounded-lg border border-gray-main text-[14px] leading-[21.6px] w-full lg:py-[14px] lg:text-[16px] lg:w-[350px] focus:outline-none"
              autoComplete="on"
              {...register("email")}
            />
            {error && <p className="login__input--error">{error.message}</p>}
          </>
        )}
        {isDisabled && (
          <>
            <span className="text-[14px] leading-[20px] font-medium lg:text-[16px]">
              Email
            </span>
            <p className="text-[14px] leading-[20px] font-bold">
              abbas.khoshseda54@gmail.com
            </p>
          </>
        )}
      </div>
      <div className="flex items-center gap-x-[10px] text-[14px] leading-[14px] font-semibold w-12 h-12 lg:w-auto">
        {isDisabled && (
          <button
            type="button"
            className="p-[13px] flex items-center justify-center border border-gray-main rounded-[10px] flex-[2] lg:w-[94px] lg:h-10"
            onClick={() => setIsDisabled(false)}
          >
            <div className="lg:hidden">
              <PenIcon />
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:text-[14px] lg:leading-[14px] lg:font-semibold">
              Edit
            </div>
          </button>
        )}
        {!isDisabled && (
          <>
            <button
              type="button"
              className="px-5 py-[13px] flex items-center justify-center rounded-[10px] text-[14px] leading-[14px] font-semibold border border-gray-main w-full "
              onClick={() => setIsDisabled(true)}
            >
              Confirm
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-5 py-[13px]"
              onClick={() => setIsDisabled(true)}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailInputBox;
