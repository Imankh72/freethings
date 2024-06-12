"use client";

import { useParams, useRouter } from "next/navigation";
import { useQueries } from "@tanstack/react-query";
import AvatarBox from "@/app/components/AvatarBox";
import DatePicker from "@/app/components/DatePicker";
import Footer from "@/app/components/footer/Footer";
import LoggedInNavbar from "@/app/components/home/hero-section/LoggedInNavbar";
import BreadCrumb from "@/app/components/product-display/BreadCrumb";
import LocationBox from "@/app/components/product-display/LocationBox";
import PrimaryPDPCarousel from "@/app/components/product-display/PrimaryPDPCarousel";
import ProductDetails from "@/app/components/product-display/ProductDetails";
import RequestBox from "@/app/components/product-display/RequestBox";
import RequestModal from "@/app/components/product-display/RequestModal";
import SecondaryPDPCarousel from "@/app/components/product-display/SecondaryPDPCarousel";
import { BreadCrumbSeparator } from "@/app/components/svgs/BreadCrumbSeparator";
import { FavoriteIcon } from "@/app/components/svgs/FavoriteIcon";
import { useProducts } from "@/app/hooks/useProducts";
import Loading from "@/app/components/Loading";
import WhiteCircle from "@/app/components/svgs/WhiteCircle";
import { useLocation } from "@/app/hooks/useLocation";
import PDPSimilarCarousel from "@/app/components/product-display/PDPSimilarCarousel";

const ProductDetailsPage = () => {
  const { getSimilarProducts, getProductDetails } = useProducts();
  const params = useParams<{ slug: string }>();
  const id = +params.slug.split("-").at(-1);
  const { lat, lng, radius } = useLocation();
  const router = useRouter();

  const [similarProduct, product] = useQueries({
    queries: [
      {
        queryKey: ["get-similar-products", lat, lng, radius],
        queryFn: () => getSimilarProducts(id),
        retry: 1,
        enabled: !!lat && !!lng && !!radius,
      },
      {
        queryKey: ["product-details", lat, lng, radius],
        queryFn: () => getProductDetails(id),
        retry: 1,
        enabled: !!lat && !!lng && !!radius,
      },
    ],
  });

  if (product.isLoading || similarProduct.isLoading) return <Loading />;

  return (
    <>
      {product?.data?.data?.id && (
        <main className="bg-gray-100 mx-auto overflow-x-hidden h-full pb-24 relative lg:pb-0 lg:h-screen">
          <div
            className={`relative pt-10 ${
              similarProduct?.data?.data.length === 0 && "lg:pb-[380px]"
            }`}
          >
            <div className="hidden lg:block mb-10 lg:px-20">
              <LoggedInNavbar isWhite />
            </div>
            <div className="max-width lg:px-20 lg:mb-10">
              <div className="px-[19px] flex items-center justify-between mb-[10px] lg:hidden">
                <div onClick={() => router.back()}>
                  <BreadCrumbSeparator mobile />
                </div>
                <span className="text-[13px] text-gray-main leading-[20px]">
                  Category here
                </span>
              </div>
              <div className="hidden lg:block">
                <BreadCrumb />
              </div>
              <div className="relative max-width lg:flex lg:justify-center lg:gap-x-10 lg:bg-gray-100">
                <div className="lg:hidden">
                  <SecondaryPDPCarousel data={product?.data?.data} />
                </div>
                <div className="hidden lg:block">
                  <PrimaryPDPCarousel data={product?.data?.data} />
                </div>
                <div className="relative lg:flex-1 bg-white lg:pb-10 lg:bg-gray-100 lg:h-[600px] lg:overflow-y-scroll lg:overflow-x-hidden lg:p-1">
                  <div className="px-7 mb-5 lg:hidden lg:mb-0">
                    <AvatarBox
                      displayName={product?.data?.data?.user?.displayName}
                      imageSize="w-10 h-10"
                    />
                  </div>
                  <ProductDetails
                    title={product?.data?.data?.title}
                    brand={product?.data?.data?.brand}
                    description={product?.data?.data?.description}
                    addedDays={product?.data?.data?.addedDays}
                  />
                  <div className="yellow__line"></div>
                  <div className="hidden lg:block">
                    <FavoriteIcon />
                  </div>
                  <LocationBox
                    lat={product?.data?.data?.latitude}
                    lng={product?.data?.data?.longitude}
                    weight={product?.data?.data?.weightType}
                    pickUp={product?.data?.data?.pickupType}
                    floor={product?.data?.data?.floorNo}
                  />
                  <div className="yellow__line"></div>
                  <div className="hidden lg:block lg:relative lg:z-10">
                    <h4 className="text-[24px] leading-[24px] font-bold mb-3">
                      Pick up Time
                    </h4>
                    <div className="hidden lg:block lg:!relative lg:!z-10">
                      <DatePicker
                        fromDate={product?.data?.data?.fromDate}
                        toDate={product?.data?.data?.toDate}
                      />
                    </div>
                  </div>
                  <div className="hidden mt-5 mr-2 sticky bottom-0 left-0 lg:z-20 lg:block">
                    <button
                      type="button"
                      className="sticky -bottom-0 left-3 text-white text-[18px] leading-[23px] py-[18px] px-[50px] w-[338px] h-16 border-2 border-solid border-transparent bg-[#000000cc] opacity-80 flex items-center justify-center rounded-[70px] mobile__menu__gradient lg:w-[450px] lg:z-20"
                    >
                      request this item
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:hidden">
                <RequestBox mobile />
              </div>
            </div>
            <div className="hidden max-width lg:block lg:relative">
              <PDPSimilarCarousel data={similarProduct?.data?.data} />
              <div className="hidden lg:block lg:absolute lg:-left-[42rem] lg:top-0 lg:z-0">
                <WhiteCircle />
              </div>
            </div>
          </div>
          <RequestModal
            fromDate={product?.data?.data?.fromDate}
            toDate={product?.data?.data?.toDate}
          />
          <Footer />
        </main>
      )}
    </>
  );
};

export default ProductDetailsPage;
