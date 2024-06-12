"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { DayPicker, DayClickEventHandler } from "react-day-picker";
import { isSameDay } from "date-fns";
import AddItemTimeRangeBox from "./AddItemTimeRangeBox";
import AddItemTimeButtonBox from "./AddItemTimeButtonBox";
import SelectPreviousLocation from "./SelectPreviousLocation";
import { useAddItem } from "@/app/hooks/useAddItem";
import { formatDate } from "@/app/utils/formatDate";
import { useProducts } from "@/app/hooks/useProducts";

const DynamicMap = dynamic(
  () => import("@/app/components/add-item/AddItemMap"),
  {
    ssr: false,
  }
);

const AddItemAddressBox = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [maxDate, setMaxDate] = useState(2);
  const {
    openResultAddItemModal,
    setDate,
    inputValues,
    handleOnChangeInput,
    selectedDays,
    setSelectedDays,
  } = useAddItem();

  const { addProduct } = useProducts();

  const {
    fromTime,
    toTime,
    fromDate,
    toDate,
    latitude,
    longitude,
    address,
    productGalleryList,
    title,
    categoryTitle,
    weightType,
    condition,
    pickupType,
  } = inputValues;

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    const newSelectedDays = [...selectedDays];
    if (modifiers.selected) {
      const index = selectedDays.findIndex((selectedDay) =>
        isSameDay(day, selectedDay)
      );
      newSelectedDays.splice(index, 1);
    } else {
      newSelectedDays.push(day);
    }

    setSelectedDays(newSelectedDays);
  };

  const fDate = formatDate(
    selectedDays[0]?.toString()?.split(" ")?.splice(1, 3)?.join(" ")
  );

  const tDate = formatDate(
    selectedDays[1]?.toString()?.split(" ")?.splice(1, 3)?.join(" ")
  );

  const handleBtnClick = async () => {
    const response = await addProduct();
    if (response.status === 200) {
      openResultAddItemModal();
    }
  };

  useEffect(() => {
    if (
      fromDate &&
      toDate &&
      fromTime &&
      toTime &&
      latitude &&
      longitude &&
      address &&
      productGalleryList.length > 0 &&
      title &&
      categoryTitle &&
      weightType &&
      condition &&
      pickupType
    ) {
      setIsDisabled(false);
    }

    if (fDate && tDate) setDate(fDate, tDate);
  }, [
    address,
    fromDate,
    fromTime,
    toDate,
    toTime,
    latitude,
    longitude,
    productGalleryList,
    title,
    categoryTitle,
    weightType,
    condition,
    pickupType,
    fDate,
    tDate,
    setDate,
  ]);

  return (
    <div className="flex flex-col gap-y-5 add-item__address__box pb-2 relative lg:gap-y-[10px]">
      <p className="text-center text-[14px] font-medium leading-[26px] lg:hidden">
        Add the <b>name and description</b> of your listing
      </p>
      <AddItemTimeButtonBox />
      <div className="add-item__date-picker">
        <DayPicker
          mode="multiple"
          min={2}
          max={2}
          onDayClick={handleDayClick}
          selected={selectedDays}
        />
      </div>
      <AddItemTimeRangeBox />
      <div className="flex flex-col gap-y-[5px]">
        <label htmlFor="address">Address</label>
        <input
          className="rounded-[8px] text-[14px] placeholder:text-gray-light px-[10px] py-[15px] border border-gray-main inline-block focus:outline-blue-main"
          type="text"
          value={address}
          onChange={handleOnChangeInput}
          placeholder="Enter product name"
          id="address"
          name="address"
        />
      </div>
      <div>
        <p className="text-[14px] leading-[26px] mb-[2px]">Or choose on map</p>
        <DynamicMap />
        <div className="lg:hidden">
          <SelectPreviousLocation />
        </div>
      </div>
      <button
        type="button"
        className={`hidden lg:flex add-item__btn ${
          isDisabled
            ? "add-item__btn--disabled text-gray-main"
            : "mobile__menu__gradient"
        }`}
        onClick={handleBtnClick}
        disabled={isDisabled}
      >
        Post Item
      </button>
      <div className="hidden lg:block text-[34px] leading-[18px] font-bold text-green-main absolute -top-12 left-0">
        <span className="text-[84px] leading-[20px]">3</span> Time
      </div>
    </div>
  );
};

export default AddItemAddressBox;
