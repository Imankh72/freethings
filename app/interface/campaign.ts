import { Product } from "./product";

export interface Campaign {
  id: number;
  title: string;
  displayType: number;
  priority: number;
  logo: string | null;
  logoUrl: string | null;
  productList: Product[] | [];
}
