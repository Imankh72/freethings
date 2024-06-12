import { useState } from "react";

interface RadioButtonProps {
  name: string;
  id: number;
  value: string;
  text: string;
}

const RadioButton = ({ id, name, text, value }: RadioButtonProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <label
      className="radio-button__container px-0 gap-x-3 justify-end"
      htmlFor={`${name}-${id}`}
      key={id}
    >
      <input
        type="radio"
        className="absolute opacity-0 cursor-pointer peer/input"
        name={name}
        value={value.toString()}
        id={`${name}-${id}`}
        onClick={() => setSelected(id)}
      />
      {text}
      <span
        className={`absolute top-0 -right-7 h-5 w-5 bg-transparent border border-[#077169] rounded-full whitespace-nowrap 
  ${
    selected === id
      ? "bg-white border border-[#077169] after:block after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:w-4 after:h-4 after:rounded-full after:bg-[#077169]"
      : "after:hidden"
  } 
`}
      ></span>
    </label>
  );
};

export default RadioButton;
