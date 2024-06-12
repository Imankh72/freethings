"use client";

import { motion } from "framer-motion";

interface ToggleBtnProp {
  toggle: 0 | 1;
  handleOnClick: () => void;
  activeColor: "blue" | "orange" | "green";
}

const ToggleBtn = ({ activeColor, toggle, handleOnClick }: ToggleBtnProp) => {
  const activeColorStyle =
    activeColor === "orange"
      ? "bg-[#FF823F]"
      : activeColor === "blue"
      ? "bg-[#1977F2]"
      : "bg-[#077169]";
  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex items-center w-[52px] h-9 cursor-pointer rounded-full bg-[#EBEBEB] px-1 ${
          toggle === 1 ? "justify-end" : "justify-start"
        }`}
        onClick={handleOnClick}
      >
        <motion.div
          className={`h-7 w-7 rounded-full ${
            toggle === 1 ? activeColorStyle : "bg-white"
          }`}
          layout
          transition={{ type: "spring", duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ToggleBtn;
