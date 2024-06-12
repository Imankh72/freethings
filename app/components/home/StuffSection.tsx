import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import angleSofa from "@/public/images/angle-sofa.png";
import LoadingBox from "../LoadingBox";
import { ProductCardClockIcon } from "../svgs/ProductCardClockIcon";
import { CarIcon } from "../svgs/CarIcon";
import { Location } from "../svgs/Location";
import { Product } from "@/app/interface/product";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useSearch } from "@/app/hooks/useSearch";
import { useInView } from "react-intersection-observer";

interface StuffProp {
  data: {
    pages: Product[][];
  };
  fetchNextPage?: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  hasNextPage?: boolean;
  mobile?: boolean;
}

const StuffSection = ({
  data,
  hasNextPage,
  fetchNextPage,
  mobile = false,
}: StuffProp) => {
  const { maxPages, setMaxPages } = useSearch();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && data?.pages.length < maxPages) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, data?.pages.length, maxPages]);

  return (
    <>
      {data?.pages[0].length > 0 && (
        <div className="relative w-full max-width pb-20 lg:pb-0 lg:px-20">
          <div className="px-[10px] lg:relative lg:px-0">
            <h2 className="text-[35px] leading-[30px] text-gray-main font-[200] mb-5 lg:text-[65px] lg:mb-10">
              some more stuff
            </h2>
            <div className="grid grid-cols-2 gap-[10px] mb-[38px] lg:grid-cols-3 lg:gap-5 lg:mb-10 lg:relative lg:z-30">
              {data?.pages.map((page: any) =>
                page.map(({ id, imageUrl, title }: any) => (
                  <Link
                    key={id}
                    href={`/product-details/${title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}-${id}`}
                    className="flex flex-col pb-[6px] lg:h-[407px] lg:bg-white lg:p-2 lg:pb-5 lg:relative lg:rounded-[20px]"
                  >
                    {imageUrl && (
                      <Image
                        className="rounded-[10px] w-full h-[170px] object-cover lg:mb-3 lg:w-full lg:h-[312px] lg:rounded-t-[15px]"
                        src={imageUrl}
                        alt={title}
                        width={mobile ? 170 : 447}
                        height={mobile ? 170 : 312}
                      />
                    )}
                    <div className="px-1">
                      <h5 className="text-[18px] leading-[30px] font-bold text-left mb-1 lg:text-[22px] lg:leading-[30px]">
                        {title}
                      </h5>
                      <div className="flex items-center justify-between text-[#969696]">
                        <div className="text-[#969696] text-[12px] leading-[5px] font-medium flex items-center justify-between flex-wrap gap-x-[15px] gap-y-[2px] lg:justify-start lg:gap-x-[15px] lg:gap-y-1 lg:text-[16px] lg:leading-[5px]">
                          <div className="flex items-center gap-x-[5px]">
                            <ProductCardClockIcon />
                            <span>2 requests</span>
                          </div>
                          <div className="flex items-center gap-x-[5px]">
                            <CarIcon />
                            <span>10 min</span>
                          </div>
                          <div className="flex items-center gap-x-[5px]">
                            <Location isGreen={false} />
                            <span>near by</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
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
            <Image
              src={angleSofa}
              alt="angle-sofa"
              className="hidden lg:block lg:absolute lg:-right-96 lg:-top-48 lg:z-0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StuffSection;
