"use client";

import Image from "next/image";
import Link from "next/link";
import { GreenCircle } from "../svgs/GreenCircle";
import { useQuery } from "@tanstack/react-query";
import httpService from "@/app/services/http";

interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

interface Categories {
  data: {
    data: Category[];
  };
}

const Categories = () => {
  const { data } = useQuery({
    queryKey: ["category-list"],
    queryFn: async () => {
      const {
        data: { data },
      }: Categories = await httpService("/v1/product/categorylist");
      return data;
    },
    staleTime: 60 * 1000,
    retry: 1,
  });

  return (
    <>
      {data?.length > 0 && (
        <div className="relative my-20 max-width px-5 lg:my-10 lg:px-20">
          <div className="flex items-center overflow-x-scroll gap-x-6 lg:gap-x-0 lg:justify-between lg:overflow-x-hidden">
            {data?.map(({ id, title, imageUrl }) => (
              <Link
                href={`/categories/${title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}-${id}`}
                key={id}
                className="flex flex-col items-stretch justify-between h-[208px] w-[300px] lg:overflow-hidden lg:w-auto"
              >
                <Image
                  className="flex w-[145px] h-[145px] object-cover max-w-none"
                  src={imageUrl}
                  alt={title}
                  width={145}
                  height={145}
                />
                <span className="inline-block w-full text-gray-main text-[24px] font-semibold leading-[30px] text-center lg:text-[30px] lg:h-9">
                  {title}
                </span>
              </Link>
            ))}
          </div>
          <div className="hidden lg:block lg:absolute lg:-right-96 lg:-top-96 lg:-z-50">
            <GreenCircle />
          </div>
          <div className="absolute -z-[9999] left-0 -top-52 lg:hidden">
            <GreenCircle mobile />
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
