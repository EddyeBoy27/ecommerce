import { Products } from "../interfaces/products/products.interface";

export const getAllProducts = async (): Promise<Products> => {
  const products = {
    items: [
      {
        title: "lala",
        description: "lala",
        image: "lalala",
        value: 100,
        stars: 2,
        discountCoupon: true,
        inventory: 29,
        category: "lala",
      },
    ],
    totalEntries: 10,
  };
  return products;
};
