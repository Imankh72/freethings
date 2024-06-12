"use client";

import { useEffect, useMemo } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import PrimaryCarousel from "./components/home/PrimaryCarousel";
import Categories from "./components/home/Categories";
import Footer from "./components/footer/Footer";
import Hero from "./components/home/hero-section/Hero";
import SpottingSection from "./components/home/SpottingSection";
import StuffSection from "./components/home/StuffSection";
import SecondaryCarousel from "./components/home/SecondaryCarousel";
import MobileMenu from "./components/MobileMenu";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Loading from "./components/Loading";
import { useUser } from "./hooks/useUser";
import HeroSpottedCarousel from "./components/home/HeroSpottedCarousel";
import GetAppSection from "./components/home/GetAppSection";
import { useProducts } from "./hooks/useProducts";
import { useLocation } from "./hooks/useLocation";
import { useSearch } from "./hooks/useSearch";
import { getCookie } from "cookies-next";
import { useCampaign } from "./hooks/useCampaign";

const DynamicNeighbour = dynamic(
  () => import("./components/home/NeighbourSection"),
  { ssr: false }
);
const Home: NextPage = () => {
  const { lat, lng, radius } = useLocation();
  const { getAllHomePageProducts, getProductsByPage } = useProducts();
  const { isLoggedIn, setIsLoggedIn } = useUser();
  const { getCampaignLogo, getCampaignProducts } = useCampaign();
  const { setSearchValue } = useSearch();

  const { data, error, isLoading } = useQuery({
    queryKey: ["all-products", lat, lng, radius],
    queryFn: getAllHomePageProducts,
    staleTime: 60 * 1000,
    retry: 1,
    enabled: !!lat && !!lng && !!radius,
  });

  const allProducts = useMemo(() => {
    return data?.map((item) => item.productList);
  }, [data]);

  const allProductsByLocation = useMemo(() => {
    return allProducts?.map((item) =>
      item.map((p) => ({
        id: p.id,
        title: p.title,
        lat: p.latitude,
        lng: p.longitude,
      }))
    );
  }, [allProducts]);

  useEffect(() => {
    setSearchValue("");
    getCookie("user_token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [setSearchValue, setIsLoggedIn]);

  const {
    data: products,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products-infinite", lat, lng, radius],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getProductsByPage(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, pages) => pages.length + 1,
    retry: 1,
    enabled: !!lat && !!lng && !!radius,
  });

  if (isLoading) return <Loading />;

  return (
    <main className="bg-gray-100 mx-auto overflow-x-hidden relative z-0">
      <Hero />
      <div className="lg:hidden">
        <PrimaryCarousel
          data={getCampaignProducts(data, "featured")}
          titleImage={getCampaignLogo(data, "featured")}
          title="featured"
          mobile
        />
      </div>
      <div className="hidden lg:block">
        <PrimaryCarousel
          data={getCampaignProducts(data, "featured")}
          titleImage={getCampaignLogo(data, "featured")}
          title="featured"
        />
      </div>

      {isLoggedIn && (
        <HeroSpottedCarousel
          data={data?.filter((item) => item.title === "Spotting")}
        />
      )}

      {isLoggedIn && (
        <HeroSpottedCarousel
          data={data?.filter((item) => item.title === "Spotting")}
          mobile
        />
      )}
      {!isLoggedIn && <SpottingSection />}
      <div className="relative z-20 lg:hidden">
        <SecondaryCarousel
          data={getCampaignProducts(data, "pickup today")}
          titleImage={getCampaignLogo(data, "pickup today")}
          title="pickup today"
        />
      </div>
      <div className="hidden lg:block">
        <PrimaryCarousel
          data={getCampaignProducts(data, "pickup today")}
          titleImage={getCampaignLogo(data, "pickup today")}
          title="pickup today"
        />
      </div>
      <Categories />
      <DynamicNeighbour data={allProductsByLocation} />
      {isLoggedIn && <GetAppSection />}
      <div className="mb-[38px] lg:hidden">
        <SecondaryCarousel
          data={getCampaignProducts(data, "just added")}
          titleImage={getCampaignLogo(data, "just added")}
          title={"just added"}
          small
        />
      </div>
      <div className="hidden lg:block lg:mb-[70px]">
        <PrimaryCarousel
          data={getCampaignProducts(data, "just added")}
          titleImage={getCampaignLogo(data, "just added")}
          title={"just added"}
        />
      </div>
      <StuffSection
        data={products}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
      <Footer />
      <MobileMenu />
    </main>
  );
};

export default Home;
