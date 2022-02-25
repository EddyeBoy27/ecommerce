import { IProducts } from "../interfaces/products/products.interface";
import { IProduct } from "../interfaces/products/single.product.interface";
import * as productModel from "../models";

export const getAllProducts = async (): Promise<IProducts> => {
  const prodModAll = await productModel.getAllProducts();
  return prodModAll;
};

export const createProduct = async (prod: IProduct): Promise<IProduct> => {
  const newProdMod = await productModel.createProduct(prod);
  return newProdMod;
};
