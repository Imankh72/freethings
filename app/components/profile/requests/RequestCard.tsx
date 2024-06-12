"use client";

import Image from "next/image";
import { useRequestModal } from "@/app/hooks/useRequestModal";

interface UserAvatar {
  id: number;
  displayName: string;
  avatar: string;
  avatarUrl: string;
}

interface RequestCard {
  createdBy: number;
  id: number;
  imageName: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  productAddress: string;
  productTitle: string;
  productId: number;
  requestDate: string;
  requestTime: string;
  status: number;
  userList: UserAvatar[];
}

interface RequestCardProp {
  data: RequestCard[];
}

const RequestCard = ({ data }: RequestCardProp) => {
  const { openAllRequestsModal } = useRequestModal();

  return (
    <>
      {data?.map(
        ({
          id,
          productTitle,
          imageUrl,
          userList,
          requestDate,
          requestTime,
        }) => (
          <div
            key={id}
            className="flex gap-x-[10px] h-[84px] lg:h-auto lg:p-2 lg:bg-white lg:rounded-[20px]"
          >
            <Image
              className="w-[84px] h-[84px] lg:w-[412px] lg:h-[391px]"
              src={imageUrl}
              alt={productTitle}
              width={412}
              height={391}
            />
            <div className="flex justify-between py-[10px] w-full lg:flex-col lg:justify-start">
              <div className="flex flex-1 flex-col justify-between lg:justify-normal lg:items-center lg:flex-initial lg:mb-10">
                <h5 className="text-[13px] leading-[13px] font-medium lg:text-[22px] lg:leading-[30px] lg:font-bold lg:text-center">
                  {productTitle}
                </h5>
                <p className="text-[8px] leading-[13px] font-medium lg:text-[16px] lg:leading-[30px] lg:text-gray-light lg:font-normal">
                  Listed in {requestDate}
                </p>
              </div>
              <div className="flex flex-1 flex-col items-end mt-3 lg:mt-0 lg:items-center lg:flex-initial">
                <span className="text-black text-[43px] leading-[13px] font-medium inline-block lg:text-[83px] lg:mb-2">
                  {data.length}
                </span>
                <span className="text-[6px] leading-[13px] font-medium inline-block mt-2 lg:text-[23px] lg:mt-6 lg:mb-[19px]">
                  requests
                </span>
                <div className="flex items-center lg:mb-5">
                  {userList.length !== 0 &&
                    userList
                      .slice(0, 5)
                      .map(({ id, avatarUrl, displayName }) => (
                        <Image
                          key={id}
                          className={`w-6 h-6 rounded-full ${
                            id > 1 && "-ml-3"
                          } lg:w-10 lg:h-10`}
                          src={avatarUrl}
                          alt={displayName}
                          width={40}
                          height={40}
                        />
                      ))}
                  <div
                    className={`-ml-5 text-black text-[14px] leading-[20px] font-medium bg-[#FF823F] w-5 h-5 rounded-full flex items-center justify-center p-3 ${
                      userList.length > 5 ? "block" : "hidden"
                    } lg:w-10 lg:h-10`}
                  >
                    +
                  </div>
                </div>
                <button
                  type="button"
                  className="hidden lg:flex items-center justify-center h-[50px] px-[30px] py-[17px] rounded-[50px] text-gray-main text-[21px] bg-white leading-[18px] font-medium mb-5 border-[1.5px] border-transparent edit__btn--gradient"
                  onClick={openAllRequestsModal}
                >
                  View Requests
                </button>
                <div className="hidden text-[14px] leading-[13px] font-medium lg:flex lg:flex-col lg:items-center lg:gap-y-[9px]">
                  <span className="text-gray-light">Easiest Pick Up:</span>
                  <span>{requestTime}</span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default RequestCard;
