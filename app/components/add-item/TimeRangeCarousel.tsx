import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useAddItem } from "@/app/hooks/useAddItem";

import "swiper/css";
import "swiper/css/pagination";

interface TimeRangeCarouselProps {
  timeRange: {
    id: number;
    hour: string;
  }[];
  title: "fromTime" | "toTime";
}

const TimeRangeCarousel = ({ timeRange, title }: TimeRangeCarouselProps) => {
  const { setTime, inputValues } = useAddItem();
  const [activeSlideId, setActiveSlideId] = useState<number | null>(null);
  const handleSlideClick = (id: number, hour: string) => {
    setTime(title, hour);
    setActiveSlideId(id);
  };

  return (
    <>
      <Swiper
        direction="vertical"
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={10}
        mousewheel
        modules={[Mousewheel]}
        className="time-range__carousel"
      >
        {timeRange?.map(({ id, hour }) => (
          <SwiperSlide
            key={id}
            onClick={() => handleSlideClick(id, hour)}
            className={
              activeSlideId === id &&
              "!border !border-black !flex-none !rounded-[50px] !font-bold !text-[14px] !cursor-pointer"
            }
          >
            {hour}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TimeRangeCarousel;
