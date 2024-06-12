import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import PenIcon from "../../svgs/PenIcon";

interface PhoneNumberInputBoxProp {
  errors: {
    codeCountryNumberError: FieldError | undefined;
    phoneNumberError: FieldError | undefined;
  };
  register: UseFormRegister<{
    codeCountryNumber?: number;
    phoneNumber?: number;
  }>;
}

const PhoneNumberInputBox = ({ register, errors }: PhoneNumberInputBoxProp) => {
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
              Phone Number
            </span>
            <div className="flex items-center gap-x-2 flex-[3]">
              <input
                type="number"
                className="inline-block px-[14px] py-[9px] bg-transparent rounded-lg border border-gray-main text-[14px] leading-[21.6px] w-full flex-1 lg:py-[14px] lg:text-[16px] lg:w-16 lg:flex-initial focus:outline-none"
                autoComplete="on"
                {...register("codeCountryNumber")}
              />
              {errors.codeCountryNumberError && (
                <p className="login__input--error">
                  {errors?.codeCountryNumberError?.message}
                </p>
              )}
              <input
                type="number"
                className="inline-block px-[14px] py-[9px] bg-transparent rounded-lg border border-gray-main text-[14px] leading-[21.6px] w-full flex-[7] lg:py-[14px] lg:text-[16px] lg:w-[280px] lg:flex-initial focus:outline-none"
                autoComplete="on"
                {...register("phoneNumber")}
              />
              {errors.phoneNumberError && (
                <p className="login__input--error">
                  {errors?.phoneNumberError?.message}
                </p>
              )}
            </div>
          </>
        )}
        {isDisabled && (
          <>
            <span className="text-[14px] leading-[20px] font-medium lg:text-[16px]">
              Phone Number
            </span>
            <p className="text-[14px] leading-[20px] font-bold">+1 779 32 34</p>
          </>
        )}
      </div>
      <div className="flex items-center gap-x-[10px] text-[14px] leading-[14px] font-semibold lg:w-auto">
        {isDisabled && (
          <button
            type="button"
            className="p-[13px] flex items-center justify-center border border-gray-main rounded-[10px] flex-[2] w-12 h-12 lg:w-[94px] lg:h-10"
            onClick={() => setIsDisabled(false)}
          >
            <div className="lg:hidden">
              <PenIcon />
            </div>
            <div className="hidden lg:block lg:text-[14px] lg:leading-[14px] lg:font-semibold">
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

export default PhoneNumberInputBox;
