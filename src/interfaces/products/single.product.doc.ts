import { Document } from "mongoose";

export interface ProductDoc extends Document {
  title: string;
  description: string;
  image: string;
  value: number;
  stars: number;
  discountCoupon: boolean;
  inventory: number;
  category: string;
}
