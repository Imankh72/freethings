"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import httpService from "@/app/services/http";
import { useTagList } from "@/app/hooks/useTagList";

interface categoriesProp {
  isDark?: boolean;
  isPrimary?: boolean;
}

const HeroCategories = ({ isDark = false, isPrimary }: categoriesProp) => {
  const { selected, setSelected } = useTagList();
  const router = useRouter();
  const path = usePathname();

  const { data: categories } = useQuery<
    {
      title: string;
    }[]
  >({
    queryKey: ["tag-list"],
    queryFn: async () => {
      const { data } = await httpService("/v1/product/taglist");
      return data.data;
    },
  });

  const handleClick = (title: string) => {
    setSelected(title);
    router.push(`/products/${title.toLowerCase()}`);
  };

  useEffect(() => {
    if (path === "/") {
      setSelected(null);
    }
  }, [path, setSelected]);

  return (
    <div
      className={`bg-[#ffffffcc] items-center ${
        isPrimary
          ? "flex justify-between overflow-x-scroll lg:max-w-[892px] lg:overflow-x-auto lg:gap-x-[10px]"
          : "lg:flex-col"
      } lg:bg-transparent lg:justify-normal lg:overflow-x-hidden lg:flex-wrap lg:w-full lg:gap-y-2`}
    >
      <button
        type="button"
        className={`category__btn ${
          selected === null
            ? "category__btn--gradient"
            : "category__btn--primary"
        }`}
        onClick={() => setSelected(null)}
      >
        near me
      </button>
      {categories?.map(({ title }) => (
        <button
          type="button"
          onClick={() => handleClick(title)}
          key={title}
          className={`category__btn ${
            isDark ? "category__btn--dark" : "category__btn--primary"
          } ${selected === title && "category__btn--gradient"}`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default HeroCategories;
