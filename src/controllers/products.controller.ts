import { Request, Response } from "express";
import { connectionDB } from "../database";
import { Products } from "../interfaces/products/products.interface";

export const getAllProducts = async (req: Request, res: Response): Promise<Products> => {
  //   const db = (await connectionDB()).connection.collection("teste");
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
  return res.send(products);
};
