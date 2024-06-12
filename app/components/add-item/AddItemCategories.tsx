import { useEffect, useState } from "react";
import httpService from "@/app/services/http";
import { useQuery } from "@tanstack/react-query";
import Categories from "../home/Categories";
import { useAddItem } from "@/app/hooks/useAddItem";

const AddItemCategories = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const {
    setCategoryTitle,
    setCategoryId,
    inputValues: { categoryTitle },
  } = useAddItem();
  const handleClick = (id: number, title: string) => {
    if (selected !== id) {
      setSelected(id);
      setCategoryTitle(title);
      return;
    }

    setSelected(null);
    setCategoryTitle("");
    setCategoryId(null);
  };

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

  useEffect(() => {
    if (categoryTitle) {
      const id = data?.find((item) => item.title === categoryTitle)?.id;
      setSelected(id);
      if (!id) {
        setCategoryId(null);
        return;
      }
      setCategoryId(id);
    }
  }, [categoryTitle, data, setCategoryId]);

  return (
    <div className="flex items-center gap-[10px] flex-wrap mt-4">
      {data?.map(({ id, title }) => (
        <span
          key={id}
          className={`inline-block text-[14px] leading-[18px] font-medium px-[15px] py-[5px] border-[1.5px] rounded-[50px] ${
            selected === id ? "category__btn--gradient" : "border-gray-main"
          } lg:cursor-pointer`}
          onClick={() => handleClick(id, title)}
        >
          {title}
        </span>
      ))}
    </div>
  );
};

export default AddItemCategories;
