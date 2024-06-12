import { useAddItem } from "@/app/hooks/useAddItem";

interface AddItemDetailsInputProps {
  field: "title" | "categoryTitle" | "description" | "brand";
  label: string;
  id: string;
  placeholder: string;
  value: string;
}

const AddItemDetailsInput = ({
  field,
  label,
  id,
  placeholder,
  value,
}: AddItemDetailsInputProps) => {
  const { handleOnChangeInput } = useAddItem();
  return (
    <div className="flex flex-col gap-y-[5px]">
      <label htmlFor={id}>{label}</label>
      <input
        className="rounded-[8px] text-[14px] placeholder:text-gray-light px-[10px] py-[15px] border border-gray-main inline-block focus:outline-[#FF823F]"
        type="text"
        placeholder={placeholder}
        onChange={handleOnChangeInput}
        id={id}
        name={field}
        value={value}
      />
    </div>
  );
};

export default AddItemDetailsInput;
