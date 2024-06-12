import { useState } from "react";

const AddItemTimeButtonBox = () => {
  const [btnSelected, setBtnSelected] = useState<number>(1);

  return (
    <div className="flex items-center justify-center gap-x-[10px] bg-gray-100 rounded-[50px] p-[3px]">
      <button
        type="button"
        className={`add-item__time__btn ${
          btnSelected === 1 && "add-item__time__btn--active"
        }`}
        onClick={() => setBtnSelected(1)}
      >
        Time Period
      </button>
      <button
        type="button"
        className={`add-item__time__btn ${
          btnSelected === 2 && "add-item__time__btn--active"
        }`}
        onClick={() => setBtnSelected(2)}
      >
        Specific Date
      </button>
    </div>
  );
};

export default AddItemTimeButtonBox;
