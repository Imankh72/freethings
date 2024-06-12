"use client";

import RequestCardList from "@/app/components/profile/requests/RequestCardList";
import AllRequestsModal from "@/app/components/profile/requests/AllRequestsModal";
import AcceptRequestModal from "@/app/components/profile/requests/AcceptRequestModal";
import DeliveryRequestModal from "@/app/components/profile/requests/DeliveryRequestModal";

const RequestsPage = () => {
  return (
    <>
      <div className="max-width pr-5 lg:pb-5 lg:px-20">
        <RequestCardList />
      </div>
      <AllRequestsModal />
      <AcceptRequestModal />
      <DeliveryRequestModal />
    </>
  );
};

export default RequestsPage;
