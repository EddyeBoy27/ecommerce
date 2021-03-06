import { IProducts } from "../interfaces/products/products.interface";
import { IProduct } from "../interfaces/products/single.product.interface";
import * as productModel from "../models";

export const getAllProducts = async (): Promise<IProducts> => {
  const prodModAll = await productModel.getAllProducts();
  return prodModAll;
};

export const getOneProduct = async (id: string): Promise<IProduct[]> => {
  const prodModOne = await productModel.getOneProduct(id);
  return prodModOne;
};

export const createProduct = async (prod: IProduct): Promise<IProduct[]> => {
  const newProdMod = await productModel.createProduct(prod);
  return newProdMod;
};

export const editProduct = async (id: string, product: Partial<IProduct>): Promise<IProduct> => {
  const updateProduct = await productModel.editProduct(id, product);
  return updateProduct;
};

export const deleteProduct = async (id: string): Promise<void> => {
  return await productModel.deleteProduct(id);
};
