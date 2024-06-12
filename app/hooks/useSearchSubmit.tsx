import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "./useSearch";

export const useSearchSubmit = () => {
  const router = useRouter();
  const { searchValue } = useSearch();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products/${searchValue}`);
  };

  return {
    handleSubmit,
  };
};
