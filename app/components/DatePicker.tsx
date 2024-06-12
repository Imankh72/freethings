import { useState } from "react";
import { DayPicker } from "react-day-picker";

interface DatePickerProps {
  fromDate: string;
  toDate: string;
}

const DatePicker = ({ fromDate, toDate }: DatePickerProps) => {
  const [selected, setSelected] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  return (
    <div className="pdp__date-picker">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        fromDate={new Date(fromDate)}
        toDate={new Date(toDate)}
      />
      <div className="grid grid-cols-3 gap-[5px] gap-y-2 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-3 lg:pr-7">
        {data.map(({ id, time }) => (
          <button
            className={`date-picker__time__btn ${
              selectedTime === id
                ? "date-picker__time__btn-gradient"
                : "bg-white"
            }`}
            type="button"
            key={id}
            onClick={() => setSelectedTime(id)}
          >
            {time}:00 am
          </button>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;

const data = [
  {
    id: 1,
    time: 11,
  },
  {
    id: 2,
    time: 12,
  },
  {
    id: 3,
    time: 5,
  },
  {
    id: 4,
    time: 7,
  },
  {
    id: 5,
    time: 6,
  },
  {
    id: 6,
    time: 4,
  },
  {
    id: 7,
    time: 3,
  },
  {
    id: 8,
    time: 2,
  },
];
