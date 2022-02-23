import { Request, Response } from "express";
import { connectionDB } from "../database";
import { Products } from "../interfaces/products/products.interface";

export function getAllProducts(req: Request, res: Response): Response<Products> {
  // const db = (await connectionDB()).connection.collection("teste");
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
  return res.status(200).json(products);
}
