"use client";

import AddItemDetailsInput from "./AddItemDetailsInput";
import AddItemCategories from "./AddItemCategories";
import AddItemDetails from "./AddItemDetails";
import ToggleBtn from "./ToggleBtn";
import { useAddItem } from "@/app/hooks/useAddItem";

export interface AddItemDetailsInputInterface {
  name: "name" | "describe" | "description" | "brand";
  describe: string;
  description?: string;
  brand?: string;
}

const AddItemDetailsBox = () => {
  const { inputValues, handleOnChangeToggleBtn, handleOnChangeInput } =
    useAddItem();

  const handleOnClick = () => {
    if (inputValues.useElevator === 0) {
      handleOnChangeToggleBtn(1);
      return;
    }
    handleOnChangeToggleBtn(0);
  };

  return (
    <div className="flex flex-col gap-y-5 lg:!flex-1">
      <p className="text-center text-[14px] font-medium leading-[26px] lg:hidden">
        Add the <span className="font-bold">name and description</span> of your
        listing
      </p>
      <div className="flex flex-col gap-y-2 relative">
        <div className="flex flex-col gap-y-5 leading-[21.6px]">
          {inputsData?.map(({ field, id, label, placeholder }) => (
            <AddItemDetailsInput
              key={id}
              field={field}
              label={label}
              id={id}
              placeholder={placeholder}
              value={inputValues[field]}
            />
          ))}
        </div>
        <AddItemCategories />
        <div className="mt-2 flex flex-col gap-y-2">
          {itemDetailsData?.map(({ id, label, features, name }) => (
            <AddItemDetails
              key={id}
              label={label}
              features={features}
              name={name}
              id={id}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2 text-[14px] leading-[26px] font-bold">
          <div className="flex items-center justify-between switch-box">
            <span>Floor</span>
            <ToggleBtn
              activeColor="orange"
              toggle={inputValues.useElevator}
              handleOnClick={handleOnClick}
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Floor</span>
            <input
              type="number"
              className="border border-gray-main rounded-[50px] flex items-center justify-center px-[10px] w-[52px] py-[5px] text-gray-main text-center focus:outline-[#FF823F]"
              name="floorNo"
              min={1}
              max={70}
              value={inputValues.useElevator ? inputValues.floorNo : 0}
              onChange={handleOnChangeInput}
              disabled={inputValues.useElevator === 0 ? true : false}
            />
          </div>
        </div>
        <div className="hidden lg:block text-[34px] leading-[18px] font-bold text-[#FBBC1D] absolute -top-12 left-0">
          <span className="text-[84px] leading-[20px]">2</span> Description
        </div>
      </div>
    </div>
  );
};

export default AddItemDetailsBox;

const inputsData: {
  field: "title" | "categoryTitle" | "description" | "brand";
  label: string;
  id: string;
  placeholder: string;
}[] = [
  {
    field: "title",
    label: "Add Item",
    id: "title",
    placeholder: "Enter product name",
  },
  {
    field: "description",
    label: "Item Description",
    id: "description",
    placeholder: "Description of your product",
  },
  {
    field: "categoryTitle",
    label: "Describe your item",
    id: "categoryTitle",
    placeholder: "Choose or type category",
  },
  {
    field: "brand",
    label: "Brand",
    id: "brand",
    placeholder: "Type your brand",
  },
];

const itemDetailsData: {
  id: number;
  label: string;
  name: string;
  features: {
    id: number;
    feature: string;
    value: 1 | 2 | 3;
  }[];
}[] = [
  {
    id: 1,
    label: "Condition",
    name: "condition",
    features: [
      { id: 1, feature: "new", value: 1 },
      {
        id: 2,
        feature: "used",
        value: 2,
      },
      {
        id: 3,
        feature: "broken",
        value: 3,
      },
    ],
  },
  {
    id: 2,
    label: "Weight",
    name: "weightType",
    features: [
      { id: 1, feature: "-10 lb", value: 1 },
      {
        id: 2,
        feature: "10-50 lb",
        value: 2,
      },
      {
        id: 3,
        feature: "+ 50 lb",
        value: 3,
      },
    ],
  },
  {
    id: 3,
    label: "Pick up",
    name: "pickupType",
    features: [
      { id: 1, feature: "lobby", value: 1 },
      {
        id: 2,
        feature: "doorstep",
        value: 2,
      },
      {
        id: 3,
        feature: "building front",
        value: 3,
      },
    ],
  },
];
