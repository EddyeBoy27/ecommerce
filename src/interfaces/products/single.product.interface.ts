export interface IProduct {
  title: string;
  description: string;
  image?: string;
  value: number;
  stars: number;
  discountCoupon: boolean;
  inventory: number;
  category: string;
}
