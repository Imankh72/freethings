import Image from "next/image";
import Avatar from "@/public/images/avatar.png";
import RatingStar from "../../svgs/RatingStar";

import { useRequestModal } from "@/app/hooks/useRequestModal";

interface RequestInfoProp {
  mobile?: boolean;
  id?: number;
  selectedRequestBox?: number;
  setSelectedRequestBox?: (value: number) => void;
}

const RequestInfo = ({
  mobile = false,
  id,
  selectedRequestBox,
  setSelectedRequestBox,
}: RequestInfoProp) => {
  const {
    closeAllRequestsModal,
    openAcceptRequestModal,
    openDeliveryRequestModal,
  } = useRequestModal();

  const handleAcceptButtonClick = () => {
    openDeliveryRequestModal();
    closeAllRequestsModal();
  };

  return (
    <>
      {selectedRequestBox !== id || mobile ? (
        <div className="flex items-center justify-between w-full">
          <div className="text-gray-main flex items-center gap-x-2">
            <div>
              <Image
                className="rounded-full w-10 h-10"
                src={Avatar}
                alt="avatar"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold leading-[24px] mb-[6px]">
                Vivian
              </span>
              <div className="flex items-center gap-x-1 -mt-1">
                <div className="flex items-center gap-x-[2px]">
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                </div>
                <span className="text-[10px] font-medium mt-[2px] lg:text-[14px] leading-[11px]">
                  13
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="text-[12px] leading-[20px] font-medium text-black flex flex-col">
              <span>Tomorrow</span>
              <span>7:00 pm</span>
            </div>
            <button
              className="flex items-center justify-center bg-green-main px-[15px] py-[5px] text-white text-[12px] leading-[18px] font-medium rounded-[50px]"
              onClick={
                mobile
                  ? () => openAcceptRequestModal()
                  : () => setSelectedRequestBox(id)
              }
            >
              Accept
            </button>
          </div>
        </div>
      ) : (
        <div className="p-[10px] pb-[5px] bg-white rounded-[10px] flex flex-col gap-y-[10px]">
          <div className="text-gray-main flex items-center gap-x-2">
            <div>
              <Image
                className="rounded-full w-10 h-10"
                src={Avatar}
                alt="avatar"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold leading-[24px] mb-[6px]">
                Vivian
              </span>
              <div className="flex items-center gap-x-1 -mt-1">
                <div className="flex items-center gap-x-[2px]">
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                  <RatingStar allRequestsModal />
                </div>
                <span className="text-[10px] font-medium mt-[2px] lg:text-[14px] leading-[11px]">
                  13
                </span>
              </div>
            </div>
          </div>
          <p className="text-[12px] font-medium text-black">
            By accepting the request, we Will inform Vivian to pick it up
            tomorrow at 7:00.
          </p>
          <div className="px-5 py-[5px] flex items-center text-[12px] font-medium">
            <button
              type="button"
              className="text-white bg-green-main px-[68.5px] py-[11px] rounded-[50px] flex items-center justify-center whitespace-nowrap"
              onClick={handleAcceptButtonClick}
            >
              Yes, Let Them Know
            </button>
            <button
              type="button"
              className="rounded-[50px] px-[19px] py-[5px]"
              onClick={() => setSelectedRequestBox(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestInfo;
