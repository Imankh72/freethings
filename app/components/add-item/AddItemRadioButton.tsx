import { useEffect, useState } from "react";
import { useAddItem } from "@/app/hooks/useAddItem";

interface AddItemRadioButtonProps {
  id: number;
  text: string;
  name: string;
  value: 1 | 2 | 3;
  features: {
    id: number;
    feature: string;
    value: 1 | 2 | 3;
  }[];
}

const AddItemRadioButton = ({
  text,
  name,
  value,
  id,
  features,
}: AddItemRadioButtonProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const { handleOnClickRadioBtn, inputValues }: any = useAddItem();

  const handleOnClick = (value: 1 | 2 | 3, name: string, id: number) => {
    setSelected(id);
    handleOnClickRadioBtn(value, name);
  };

  useEffect(() => {
    if (inputValues[name]) {
      const id = features.find(
        (feature) => feature.id === inputValues[name]
      )?.id;
      setSelected(id);
    }
  }, [inputValues, name, id, features]);

  return (
    <label
      className="radio-button__container"
      htmlFor={`${name}-${id}`}
      key={id}
    >
      <input
        type="radio"
        className="absolute opacity-0 cursor-pointer peer/input"
        name={name}
        value={value.toString()}
        id={`${name}-${id}`}
        onClick={() => handleOnClick(value, name, id)}
      />
      {text}
      <span
        className={`absolute top-0 left-0 h-5 w-5 bg-transparent border border-[#FF823F] rounded-full whitespace-nowrap 
      ${
        selected === id
          ? "bg-white border border-[#FF823F] after:block after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:w-4 after:h-4 after:rounded-full after:bg-[#FF823F]"
          : "after:hidden"
      } 
    `}
      ></span>
    </label>
  );
};

export default AddItemRadioButton;
