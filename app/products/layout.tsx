import { ReactNode } from "react";
import LoadingBox from "../components/LoadingBox";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/footer/Footer";
import LoggedInNavbar from "../components/home/hero-section/LoggedInNavbar";
import PLPSearchBox from "../components/products/PLPSearchBox";
import HeroCategories from "../components/home/hero-section/HeroCategories";

const ProductsPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="p-5 py-10 lg:mx-auto relative bg-white lg:overflow-hidden lg:bg-gray-100 lg:z-10 lg:pt-[50px] lg:pb-0 lg:px-0">
      <div className="max-width">
        <div className="hidden lg:block lg:mb-[22px] lg:px-20">
          <LoggedInNavbar isWhite />
        </div>
        <div className="hidden lg:block lg:max-width lg:mb-3 lg:px-20">
          <HeroCategories isPrimary />
        </div>
        <div className="lg:px-20">
          <PLPSearchBox />
          <div className="mb-3 lg:hidden">
            <HeroCategories isPrimary />
          </div>
          {children}
        </div>
      </div>
      <MobileMenu isPrimary={false} />
      <Footer />
    </main>
  );
};

export default ProductsPageLayout;
