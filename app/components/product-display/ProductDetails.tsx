import { PaleGreenCircle } from "../svgs/PaleGreenCircle";

interface ProductDetailsProps {
  title: string;
  description: string;
  brand: string;
  addedDays: number;
}

const ProductDetails = ({
  title,
  description,
  addedDays,
  brand,
}: ProductDetailsProps) => {
  return (
    <div className="text-gray-main px-5 pb-5 lg:px-0 lg:mb-3 lg:relative">
      <h2 className="text-[24px] leading-[24px] font-bold lg:text-[34px] lg:mb-4">
        {title}
      </h2>
      <div className="flex items-center justify-between text-[12px] leading-[24px] lg:text-[14px] lg:mb-4 lg:relative lg:z-20">
        <span>
          Brand: <b>{brand}</b>
        </span>
        <span>
          Added <b>{addedDays} days</b> ago
        </span>
      </div>
      <p className="font-inter leading-[22px] lg:text-[22px] lg:leading-[28px] lg:relative lg:z-20">
        {description}
      </p>
      {/* <div className="hidden lg:block lg:absolute lg:-top-20 lg:-right-96 lg:z-0">
        <PaleGreenCircle />
      </div> */}
    </div>
  );
};

export default ProductDetails;
