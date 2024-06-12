"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { BreadCrumbSeparator } from "@/app/components/svgs/BreadCrumbSeparator";
import { z } from "zod";
import { profileSettingsInputsSchema } from "@/app/validation/profileSettingsForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailInputBox from "@/app/components/profile/settings/EmailInputBox";
import PhoneNumberInputBox from "@/app/components/profile/settings/PhoneNumberInputBox";
import PasswordInputBox from "@/app/components/profile/settings/PasswordInputBox";

type ProfileSettingsInputsType = z.infer<typeof profileSettingsInputsSchema>;

const SettingsPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ProfileSettingsInputsType>({
    resolver: zodResolver(profileSettingsInputsSchema),
  });

  const onSubmit: SubmitHandler<ProfileSettingsInputsType> = async (
    inputValues
  ) => {
    console.log(inputValues);
  };

  return (
    <div className="max-width relative z-10 lg:px-20 lg:py-[30px]">
      <div className="mb-8 lg:hidden" onClick={() => router.back()}>
        <BreadCrumbSeparator mobile />
      </div>
      <div className="flex flex-col gap-y-3 lg:gap-y-5">
        <span className="text-[20px] leading-[20px] font-bold text-black">
          Account Settings
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-3 lg:gap-y-5"
        >
          <EmailInputBox error={errors?.email} register={register} />
          <PhoneNumberInputBox
            errors={{
              codeCountryNumberError: errors?.codeCountryNumber,
              phoneNumberError: errors?.phoneNumber,
            }}
            register={register}
          />
          <PasswordInputBox
            register={register}
            errors={{
              currentPasswordError: errors?.currentPassword,
              newPasswordError: errors?.newPassword,
              confirmNewPasswordError: errors?.confirmNewPassword,
            }}
          />
        </form>
      </div>
      <div className="my-3 h-[1px] bg-gray-light relative z-10 mx-4 lg:mx-6 lg:my-[30px]"></div>
      <div className="flex flex-col gap-y-5 px-3 lg:px-6">
        <span className="text-[20px] leading-[20px] font-bold text-black lg:text-[24px] lg:font-medium">
          Other
        </span>
        <Link href="/" className="leading-[20px] font-medium">
          About
        </Link>
        <Link href="/" className="leading-[20px] text-[#FF823F]">
          Delete account
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
