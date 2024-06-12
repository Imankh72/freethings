import { useEffect, useState } from "react";
import { useAddItem } from "@/app/hooks/useAddItem";
import httpService from "@/app/services/http";
import { getCookie } from "cookies-next";
import { useProducts } from "@/app/hooks/useProducts";

interface AddItemTabProps {
  selected: number;
  setSelected: (value: number) => void;
}

const AddItemTab = ({ selected, setSelected }: AddItemTabProps) => {
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const { openResultAddItemModal } = useAddItem();
  const { inputValues } = useAddItem();
  const { addProduct } = useProducts();
  const {
    productGalleryList,
    title,
    categoryTitle,
    condition,
    weightType,
    pickupType,
    address,
    fromDate,
    fromTime,
    toDate,
    toTime,
    latitude,
    longitude,
    description,
    brand,
  } = inputValues;

  const handleContinueBtnClick = async () => {
    if (selected < 3) {
      setSelected(selected + 1);
    }

    if (selected === 3) {
      const response = await addProduct();
      if (response.status === 200) {
        openResultAddItemModal();
      }
    }
  };

  useEffect(() => {
    if (selected === 1 && productGalleryList.length > 0) {
      setIsDisable(false);
    }

    if (selected === 2) setIsDisable(true);

    if (
      selected === 2 &&
      title &&
      categoryTitle &&
      weightType &&
      condition &&
      pickupType &&
      description &&
      brand
    ) {
      setIsDisable(false);
    }

    if (selected === 3) setIsDisable(true);

    if (
      selected === 3 &&
      address &&
      fromDate &&
      fromTime &&
      toDate &&
      toTime &&
      latitude &&
      longitude
    )
      setIsDisable(false);
  }, [
    productGalleryList,
    selected,
    title,
    categoryTitle,
    weightType,
    condition,
    pickupType,
    address,
    fromDate,
    fromTime,
    toDate,
    toTime,
    latitude,
    longitude,
    description,
    brand,
  ]);

  return (
    <div className="relative z-10 lg:hidden">
      <p className="text-[14px] leading-[26px] font-extralight text-center mb-[5px]">
        Simply gift your item in{" "}
        <span className="font-bold">three simple steps!</span>
      </p>
      <div className="flex items-center gap-x-[10px] mb-[10px]">
        <span
          className={`add-item__tab ${
            selected === 1 && "add-item__tab--green"
          }`}
        ></span>
        <span
          className={`add-item__tab ${
            selected === 2 && "add-item__tab--orange"
          }`}
        ></span>
        <span
          className={`add-item__tab ${selected === 3 && "add-item__tab--blue"}`}
        ></span>
      </div>
      <button
        type="button"
        className={`add-item__btn ${
          isDisable
            ? "add-item__btn--disabled text-gray-main"
            : "mobile__menu__gradient"
        }`}
        onClick={handleContinueBtnClick}
        disabled={isDisable}
      >
        continue
      </button>
    </div>
  );
};

export default AddItemTab;
