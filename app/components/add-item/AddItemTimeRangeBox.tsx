import { TimeRangeIcon } from "../svgs/TimeRangeIcon";
import TimeRangeCarousel from "./TimeRangeCarousel";

const AddItemTimeRangeBox = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-x-16 mb-[10px]">
        <span className="leading-[18px] font-medium w-[110px]  text-center">
          from
        </span>
        <span className="leading-[18px] font-medium w-[110px]  text-center">
          to
        </span>
      </div>
      <div className="flex items-center justify-center gap-x-5">
        <TimeRangeCarousel timeRange={startTimeData} title="fromTime" />
        <TimeRangeIcon />
        <TimeRangeCarousel timeRange={endTimeData} title="toTime" />
      </div>
    </div>
  );
};

export default AddItemTimeRangeBox;

const startTimeData = [
  {
    id: 1,
    hour: "10:00",
  },
  {
    id: 2,
    hour: "11:00",
  },
  {
    id: 3,
    hour: "12:00",
  },
  {
    id: 4,
    hour: "13:00",
  },
  {
    id: 5,
    hour: "14:00",
  },
  {
    id: 6,
    hour: "15:00",
  },
  {
    id: 7,
    hour: "16:00",
  },
  {
    id: 8,
    hour: "17:00",
  },
  {
    id: 9,
    hour: "18:00",
  },
  {
    id: 10,
    hour: "19:00",
  },
  {
    id: 11,
    hour: "20:00",
  },
  {
    id: 12,
    hour: "21:00",
  },
  {
    id: 13,
    hour: "22:00",
  },
  {
    id: 14,
    hour: "23:00",
  },
];

const endTimeData = [
  {
    id: 1,
    hour: "11:00",
  },
  {
    id: 2,
    hour: "12:00",
  },
  {
    id: 3,
    hour: "13:00",
  },
  {
    id: 4,
    hour: "14:00",
  },
  {
    id: 5,
    hour: "15:00",
  },
  {
    id: 6,
    hour: "16:00",
  },
  {
    id: 7,
    hour: "17:00",
  },
  {
    id: 8,
    hour: "19:00",
  },
  {
    id: 9,
    hour: "20:00",
  },
  {
    id: 10,
    hour: "21:00",
  },
  {
    id: 11,
    hour: "22:00",
  },
  {
    id: 12,
    hour: "23:00",
  },
  {
    id: 13,
    hour: "24:00",
  },
];
