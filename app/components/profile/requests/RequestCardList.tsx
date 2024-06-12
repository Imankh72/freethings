import { useLocation } from "@/app/hooks/useLocation";
import { useProducts } from "@/app/hooks/useProducts";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import RequestCard from "./RequestCard";

const RequestCardList = () => {
  const { getUserProductRequestList } = useProducts();
  const { lat, lng, radius } = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["user-requests"],
    queryFn: getUserProductRequestList,
    retry: 1,
    enabled: !!lat && !!lng && !!radius,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-y-[11px] mt-[12px] pb-20 lg:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-[10px] lg:mb-5 lg:z-20 lg:relative">
      <RequestCard data={data} />
    </div>
  );
};

export default RequestCardList;
