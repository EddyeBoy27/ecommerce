import { IProducts } from "../interfaces/products/products.interface";
import * as productModel from "../models";

export const getAllProducts = async (): Promise<IProducts> => {
  const prodModAll = await productModel.getAllProducts();
  return prodModAll;
};
