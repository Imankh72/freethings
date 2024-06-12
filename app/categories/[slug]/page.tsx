"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useLocation } from "../../hooks/useLocation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useProducts } from "@/app/hooks/useProducts";
import ProductCard from "@/app/components/ProductCard";
import { PaleGreenCircle } from "@/app/components/svgs/PaleGreenCircle";
import WhiteCircle from "@/app/components/svgs/WhiteCircle";
import MobileMenu from "@/app/components/MobileMenu";
import LoggedInNavbar from "@/app/components/home/hero-section/LoggedInNavbar";
import PLPSearchBox from "@/app/components/products/PLPSearchBox";
import Footer from "@/app/components/footer/Footer";
import Loading from "@/app/components/Loading";
import LoadingBox from "@/app/components/LoadingBox";
import { useInView } from "react-intersection-observer";
import { useSearch } from "@/app/hooks/useSearch";

interface Category {
  id: number;
  imageUrl: string;
  title: string;
}

const CategoriesPage = () => {
  const params = useParams<{ slug: string }>();
  const id = +params.slug.split("-").at(-1);
  const { lat, lng, radius } = useLocation();
  const { getProductListByCategory } = useProducts();
  const { maxPages, setMaxPages } = useSearch();
  const [ref, inView] = useInView();

  const { data, fetchNextPage, hasNextPage, error, isLoading } =
    useInfiniteQuery({
      queryKey: ["products-by-category", lat, lng, radius],
      queryFn: ({ pageParam }: { pageParam: number }) =>
        getProductListByCategory(id, pageParam),
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

  return (
    <main className="p-5 py-10 lg:mx-auto relative bg-white lg:overflow-hidden lg:bg-gray-100 lg:z-10 lg:pt-[50px] lg:pb-0 lg:px-0">
      <div className="max-width">
        <div className="hidden lg:block lg:mb-[22px] lg:px-20">
          <LoggedInNavbar isWhite />
        </div>
        <div className="lg:px-20">
          <PLPSearchBox />

          <div className="hidden lg:block lg:absolute lg:-right-[37rem] lg:-top-16 lg:-z-[99999]">
            <PaleGreenCircle />
          </div>
          <div className="hidden lg:block lg:absolute lg:-left-[37rem] lg:top-2/3 lg:-translate-y-2/3 lg:-z-50">
            <WhiteCircle />
          </div>
          {isLoading && <Loading />}
          {data?.pages[0].data?.model.length === 0 && (
            <h2 className="text-center text-3xl font-bold flex items-center justify-center lg:h-[60vh]">
              No products found
            </h2>
          )}
          {data?.pages[0].data?.model.length > 0 && (
            <div className="grid grid-cols-2 gap-[10px] items-center justify-items-center mb-5 lg:w-full lg:grid-cols-3 lg:gap-5 lg:relative lg:z-20">
              {data?.pages.map((page: any) =>
                page.data.model.map(({ id, imageUrl, title }: Category) => (
                  <ProductCard
                    title={title}
                    image={imageUrl}
                    key={id}
                    id={id}
                  />
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
              {hasNextPage
                ? " Click to load more Products"
                : "No more Products"}
            </button>
          )}
        </div>
      </div>
      <MobileMenu isPrimary={false} />
      <Footer />
    </main>
  );
};

export default CategoriesPage;
