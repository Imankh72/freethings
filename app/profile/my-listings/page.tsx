"use client";

import { useProducts } from "@/app/hooks/useProducts";
import Spotted from "../Spotted";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/app/components/ProductCard";
import Loading from "@/app/components/Loading";

const MyListings = () => {
  const { getUserProductList } = useProducts();
  const { data, isLoading } = useQuery({
    queryKey: ["user-product-list"],
    queryFn: getUserProductList,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="max-width lg:px-20">
        <Spotted isSpotted />
      </div>
      <div className="max-width pr-5 pb-20 lg:px-20 lg:pb-5">
        <div className="grid grid-cols-2 gap-[10px] items-center justify-items-center mb-5 lg:w-full lg:grid-cols-3 lg:gap-5 lg:relative lg:z-20">
          {data &&
            data?.length > 0 &&
            data?.map(({ id, title, imageUrl }) => (
              <ProductCard key={id} id={id} title={title} image={imageUrl} />
            ))}
        </div>
      </div>
    </>
  );
};

export default MyListings;
