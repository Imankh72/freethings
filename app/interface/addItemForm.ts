export interface AddItemFormInputs {
  productGalleryList: {
    fileType: number;
    isDefault: number;
    image: string;
  }[];
  title: string;
  categoryTitle: string;
  description: string;
  status: number;
  brand: string;
  condition: number;
  weightType: number;
  pickupType: number;
  floorNo: number;
  useElevator: 0 | 1;
  fromDate: string;
  toDate: string;
  dateList: string;
  fromTime: string;
  toTime: string;
  latitude: number;
  longitude: number;
  address: string;
  address2: string | null;
}
