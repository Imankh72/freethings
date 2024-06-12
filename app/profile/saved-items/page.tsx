"use client";

import Loading from "@/app/components/Loading";
import ProductCard from "@/app/components/ProductCard";
import { useProducts } from "@/app/hooks/useProducts";
import { useQuery } from "@tanstack/react-query";

const SavedItems = () => {
  const { getBookmarkProductList } = useProducts();

  const { data, isLoading } = useQuery({
    queryKey: ["saved-product-list"],
    queryFn: getBookmarkProductList,
  });

  if (isLoading) return <Loading />;

  return (
    <>
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

export default SavedItems;
