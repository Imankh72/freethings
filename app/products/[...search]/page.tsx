"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Error from "@/app/components/Error";
import Loading from "@/app/components/Loading";
import { useProducts } from "@/app/hooks/useProducts";
import { useSearch } from "@/app/hooks/useSearch";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useLocation } from "@/app/hooks/useLocation";
import LoadingBox from "@/app/components/LoadingBox";
import ProductCard from "@/app/components/ProductCard";
import { useInView } from "react-intersection-observer";
import SortAndFilter from "@/app/components/products/SortAndFilter";

const SearchProduct = () => {
  const pathName = usePathname();
  const slug = pathName?.split("/").at(-1);
  const { getProductsBySearch } = useProducts();
  const { searchValue } = useSearch();
  const { lat, lng, radius } = useLocation();
  const { maxPages, setMaxPages } = useSearch();
  const [ref, inView] = useInView();

  const { data, fetchNextPage, hasNextPage, error, isLoading } =
    useInfiniteQuery({
      queryKey: ["search-products-infinite", lat, lng, radius],
      queryFn: ({ pageParam }: { pageParam: number }) =>
        getProductsBySearch(searchValue || slug, pageParam),
      initialPageParam: 1,
      getNextPageParam: (_, pages) => pages.length + 1,
      staleTime: 60 * 1000,
      retry: 1,
      enabled: !!lat && !!lng && !!radius,
    });

  useEffect(() => {
    if (inView && data?.pages.length < maxPages) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, data?.pages.length, maxPages]);

  if (error) return <Error />;

  return (
    <>
      <SortAndFilter />
      {data?.pages[0].data?.model.length === 0 && (
        <h2 className="text-center text-3xl font-bold flex items-center justify-center lg:h-[60vh]">
          No products found
        </h2>
      )}
      {isLoading && <Loading />}
      {data?.pages[0].data?.model.length > 0 && (
        <div className="grid grid-cols-2 gap-[10px] items-center justify-items-center mb-5 lg:w-full lg:grid-cols-3 lg:gap-5 lg:relative lg:z-20">
          {data?.pages.map((page: any) =>
            page.data.model.map(({ id, imageUrl, title }: any) => (
              <ProductCard title={title} image={imageUrl} key={id} id={id} />
            ))
          )}
        </div>
      )}
      {data?.pages?.length < maxPages && (
        <div ref={ref}>
          <LoadingBox />
        </div>
      )}
      {data?.pages?.length === maxPages && (
        <button
          type="button"
          className="mx-auto mb-5 text-[18px] flex items-center justify-center px-4 py-5 rounded-[20px] border border-gray-main lg:text-[24px]"
          disabled={!hasNextPage}
          onClick={() => setMaxPages(5)}
        >
          {hasNextPage ? " Click to load more Products" : "No more Products"}
        </button>
      )}
    </>
  );
};

export default SearchProduct;
