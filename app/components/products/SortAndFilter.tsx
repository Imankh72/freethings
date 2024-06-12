import { useSortAndFilter } from "@/app/hooks/useSortAndFilter";
import { BreadCrumbSeparator } from "../svgs/BreadCrumbSeparator";
import RadioButton from "./RadioButton";

const SortAndFilter = () => {
  const { isOpen, setIsOpen } = useSortAndFilter();

  return (
    <div
      className={`bg-white p-5 pt-10 w-full h-screen absolute !z-[60] top-0 transition-all duration-1000 overflow-y-scroll ${
        isOpen ? "right-0 opacity-100" : "-right-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <div
          className="flex items-center gap-x-[11px] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <BreadCrumbSeparator mobile />
          <span className="text-[13px] leading-[20px] font-bold">Back</span>
        </div>
        <div className="">
          <button type="button">reset all</button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-10 font-inter">
        {data.map(({ id, label, options, name }) => (
          <div className="w-full flex justify-between px-[15px]" key={id}>
            <div className="text-[20px] leading-[30px] font-medium">
              {label}
            </div>
            <div className="flex flex-col gap-y-5 mr-7 text-right">
              {options.map(({ id, option, value }) => (
                <RadioButton
                  key={id}
                  id={id}
                  name={name}
                  text={option}
                  value={value}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default SortAndFilter;

const data = [
  {
    id: 1,
    label: "Sort By",
    name: "sortBy",
    options: [
      { id: 1, option: "Suggested", value: "1" },
      { id: 2, option: "Distance: Nearest first", value: "2" },
      { id: 3, option: "Date listed: Newest first", value: "3" },
    ],
  },
  {
    id: 2,
    label: "Condition",
    name: "condition",
    options: [
      { id: 1, option: "Any", value: "1" },
      { id: 2, option: "New", value: "2" },
      { id: 3, option: "Used", value: "3" },
      { id: 4, option: "Broken", value: "4" },
    ],
  },
  {
    id: 3,
    label: "Date listed",
    name: "dateListed",
    options: [
      { id: 1, option: "Any", value: "1" },
      { id: 2, option: "Last 24 hours", value: "2" },
      { id: 3, option: "Last 7 days", value: "3" },
      { id: 4, option: "Last 30 days", value: "4" },
    ],
  },
];
