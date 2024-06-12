import { User } from "./user";

export interface Product {
  id: number;
  title: string;
  description: string;
  categoryTitle: string;
  city: string | null;
  latitude: number;
  longitude: number;
  condition: number;
  pickupToday: number;
  imageName: string;
  imageUrl: string;
  similarity: number;
  createdTime: string;
}

export interface ProductDetails {
  id: number;
  title: string;
  categoryId: number;
  categoryTitle: string;
  description: string;
  status: number;
  brand: string;
  condition: number;
  weightType: number;
  pickupType: number;
  floorNo: number;
  useElevator: number;
  fromDate: string;
  toDate: string;
  dateList: string;
  splitDateList: string[];
  fromTime: string;
  toTime: string;
  latitude: number;
  longitude: number;
  address: string;
  address2: string | null;
  createdDateTime: string;
  addedDays: number;
  user: User;
  productRequest: number | null;
  productGalleryList: [
    {
      id: number;
      productId: number;
      fileType: number;
      isDefault: number;
      fileUrl: string;
      fileName: string;
    }
  ];
}

export interface SearchProductsData {
  data: {
    data: {
      model: {
        id: number;
        title: string;
        description?: string;
        categoryTitle?: string;
        city?: null | string;
        latitude?: number;
        longitude?: number;
        condition?: number;
        pickupToday?: number;
        imageName?: string;
        imageUrl?: string | null;
        similarity?: number;
      }[];
      currentPage: number;
      pageCount: number;
      totalRow: number;
    };
  };
}
