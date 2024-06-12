import { useState } from "react";
import Image from "next/image";
import AvatarBox from "../AvatarBox";
import { EditIcon } from "../svgs/EditIcon";
import { SettingsIcon } from "../svgs/SettingsIcon";
import { BreadCrumbSeparator } from "../svgs/BreadCrumbSeparator";
import Avatar from "@/public/images/avatar.png";
import { FlappyIcon } from "../svgs/FlappyIcon";
import Link from "next/link";

const ProfileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-5 pr-5 max-width lg:mb-4 lg:px-20">
      {isOpen && (
        <div className="flex items-center justify-between mb-5 lg:hidden">
          <button type="button" onClick={() => setIsOpen(false)}>
            <BreadCrumbSeparator mobile />
          </button>
          <span className="text-[13px] text-gray-main leading-[20px]">
            edit profile
          </span>
        </div>
      )}
      {!isOpen && (
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex items-center justify-between">
            <div className="mb-5">
              <AvatarBox />
            </div>
            <Link href="/profile/settings" className="mb-4 lg:hidden">
              <SettingsIcon />
            </Link>
          </div>
          <div className="flex items-center gap-x-[29px] lg:z-20">
            <button
              className="edit__btn edit__btn--gradient"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              <div className="hidden lg:block">
                <EditIcon isWhite={false} />
              </div>
              Edit Profile
            </button>
            <Link
              href="/profile/settings"
              className="edit__btn edit__btn--gradient hidden lg:flex"
              type="button"
            >
              <SettingsIcon />
              Settings
            </Link>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="lg:relative lg:z-10 lg:bg-white lg:px-5 lg:py-6 lg:rounded-[20px]">
          <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:justify-between lg:gap-x-[50px]">
            <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-x-[50px]">
              <div className="flex items-center justify-between lg:flex-col lg:gap-y-2">
                <Image
                  className="rounded-full w-[70px] h-[70px]"
                  src={Avatar}
                  alt="avatar"
                />
                <button type="button" className="text-blue-main">
                  edit profile picture
                </button>
              </div>
              <div className="flex items-center gap-x-5 lg:flex-col lg:gap-y-[5px] lg:items-start">
                <span className="text-[14px] leading-[21px] font-bold lg:text-[16px] lg:leading-[21.6px] lg:font-medium">
                  Name
                </span>
                <input
                  type="text"
                  className="text-[14px] leading-[21px] border border-gray-main px-[10px] py-[10px] w-full rounded-lg bg-transparent lg:text-[16px] lg:leading-[21.6px] lg:w-[350px] focus:outline-none"
                />
              </div>
            </div>
            <button
              type="button"
              className="edit__btn edit__btn--gradient gap-x-[10px] lg:w-[110px]
              "
              onClick={() => setIsOpen(false)}
            >
              <FlappyIcon />
              <span>Save</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileNavbar;
