"use client";

import { useState } from "react";

const SortTab = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="flex items-center gap-x-[5px] overflow-x-scroll mb-2 lg:justify-between lg:overflow-x-hidden lg:mb-0 lg:relative lg:z-20">
      {data.map(({ title, id }) => (
        <span
          className={`flex items-center justify-center px-[15px] py-[5px] rounded-[50px] flex-none transition-all duration-300 border-[1.5px] border-transparent ${
            selected === id && "category__btn--gradient px-7"
          } lg:cursor-pointer lg:bg-white lg:w-[82px]`}
          key={id}
          onClick={() => setSelected(id)}
        >
          {title}
        </span>
      ))}
    </div>
  );
};

export default SortTab;

const data = [
  { title: "All", id: 1 },
  { title: "Active", id: 2 },
  { title: "Picked", id: 3 },
  { title: "Expired", id: 4 },
  { title: "Spotted", id: 5 },
];
