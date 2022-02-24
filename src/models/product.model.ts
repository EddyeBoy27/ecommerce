import { IProducts } from "../interfaces/products/products.interface";
import { connectionDB, closeDB } from "../database";
import { IProduct } from "../interfaces/products/single.product.interface";

export const getAllProducts = async (): Promise<IProducts> => {
  const db = (await connectionDB()).collection("Product");
  const products = await db.find<IProduct>({}).toArray();
  const items = { items: products, totalEntries: products.length };
  await closeDB();
  return items;
};
