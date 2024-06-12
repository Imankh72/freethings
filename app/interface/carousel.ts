import { Campaign } from "./campaign";

export interface CarouselProps {
  data: Campaign;
  title: string;
  titleImage?: string;
  small?: boolean;
  mobile?: boolean;
}
