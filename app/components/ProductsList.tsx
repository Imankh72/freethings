import ProductCard from "./ProductCard";
import { PaleGreenCircle } from "./svgs/PaleGreenCircle";
import WhiteCircle from "./svgs/WhiteCircle";

interface ProductsListProps {
  data: {
    model: {
      id: number;
      title: string;
      description?: string;
      categoryTitle?: string;
      city?: null | string;
      latitude?: number;
      longitude?: number;
      condition?: number;
      pickupToday?: number;
      imageName?: string;
      imageUrl?: string | null;
      similarity?: number;
    }[];
    currentPage: number;
    pageCount: number;
    totalRow: number;
  };
}

const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-2 gap-[10px] items-center justify-items-center mb-5 lg:w-full lg:grid-cols-3 lg:gap-5 lg:relative lg:z-20">
      <div className="hidden lg:block lg:absolute lg:-right-[37rem] lg:-top-16 lg:-z-[99999]">
        <PaleGreenCircle />
      </div>
      <div className="hidden lg:block lg:absolute lg:-left-[37rem] lg:top-2/3 lg:-translate-y-2/3 lg:-z-50">
        <WhiteCircle />
      </div>
      {data?.model.map(({ id, imageUrl, title }) => (
        <ProductCard title={title} image={imageUrl} key={id} id={id} />
      ))}
    </div>
  );
};

export default ProductsList;
