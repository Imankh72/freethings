import { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import PenIcon from "../../svgs/PenIcon";

interface PasswordInputBoxProp {
  errors: {
    currentPasswordError: FieldError | undefined;
    newPasswordError: FieldError | undefined;
    confirmNewPasswordError: FieldError | undefined;
  };
  register: UseFormRegister<{
    currentPassword?: string;
    newPassword?: string;
    confirmNewPassword?: string;
  }>;
}

const PasswordInputBox = ({ register, errors }: PasswordInputBoxProp) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  return (
    <div
      className={`relative z-10 p-4 bg-white rounded-[20px] flex justify-between ${
        !isDisabled
          ? "flex-col gap-y-4 items-start lg:flex-row lg:items-end"
          : "items-center gap-x-4"
      }`}
    >
      <div className="flex flex-col w-full gap-y-2">
        {!isDisabled && (
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-[5px]">
              <span className="text-[14px] leading-[20px] font-medium lg:text-[16px]">
                Current Password
              </span>
              <input
                type="password"
                placeholder="Password"
                className="inline-block px-[14px] py-[9px] bg-transparent rounded-lg border border-gray-main text-[14px] leading-[21.6px] w-full lg:py-[14px] lg:text-[16px] lg:w-[350px] lg:flex-initial focus:outline-none"
                autoComplete="on"
                {...register("currentPassword")}
              />
              {errors.currentPasswordError && (
                <p className="login__input--error">
                  {errors?.currentPasswordError?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-5 lg:flex-row lg:justify-between lg:items-end">
              <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-[30px]">
                <div className="flex flex-col gap-y-[5px]">
                  <span className="text-[14px] leading-[20px] font-medium lg:text-[16px]">
                    New Password
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="inline-block px-[14px] py-[9px] bg-transparent rounded-lg border border-gray-main text-[14px] leading-[21.6px] w-full lg:py-[14px] lg:text-[16px] lg:w-[350px] lg:flex-initial focus:outline-none"
                    autoComplete="on"
                    {...register("newPassword")}
                  />
                  {errors.newPasswordError && (
                    <p className="login__input--error">
                      {errors?.newPasswordError?.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-y-[5px]">
                  <span className="text-[14px] leading-[20px] font-medium lg:text-[16px]">
                    Confirm New Password
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="inline-block px-[14px] py-[9px] bg-transparent rounded-lg border border-gray-main text-[14px] leading-[21.6px] w-full lg:py-[14px] lg:text-[16px] lg:w-[350px] lg:flex-initial focus:outline-none"
                    autoComplete="on"
                    {...register("confirmNewPassword")}
                  />
                  {errors.confirmNewPasswordError && (
                    <p className="login__input--error">
                      {errors?.confirmNewPasswordError?.message}
                    </p>
                  )}
                </div>
              </div>
              {!isDisabled && (
                <div className="flex items-center">
                  <button
                    type="button"
                    className="px-5 py-[13px] flex items-center justify-center rounded-[10px] text-[14px] leading-[14px] font-semibold border border-gray-main w-full lg:w-[94px] lg:h-10"
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
                </div>
              )}
            </div>
          </div>
        )}
        {isDisabled && (
          <>
            <span className="text-[14px] leading-[20px] font-medium lg:text-[16px]">
              Password
            </span>
            <p className="text-[14px] leading-[20px] font-bold">***********</p>
          </>
        )}
      </div>
      <div className="flex items-center justify-end gap-x-[10px] text-[14px] leading-[14px] font-semibold w-full lg:w-auto">
        {isDisabled && (
          <button
            type="button"
            className="p-[13px] flex items-center justify-center border border-gray-main rounded-[10px] w-12 h-12 lg:w-[94px] lg:h-10"
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
      </div>
    </div>
  );
};

export default PasswordInputBox;
