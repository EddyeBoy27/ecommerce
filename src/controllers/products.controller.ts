import { Request, Response } from "express";
import { IProducts } from "../interfaces/products/products.interface";
import { IProduct } from "../interfaces/products/single.product.interface";
import * as productService from "../services";
import * as middleware from "../middlewares";
import { partialProductSchema, productSchema } from "../middlewares/schemas";

export const getAllProducts = async (
  _req: Request,
  res: Response
): Promise<Response<IProducts>> => {
  const prodServAll = await productService.getAllProducts();
  return res.status(200).json(prodServAll);
};

export const getOneProduct = async (req: Request, res: Response): Promise<Response<IProduct[]>> => {
  const {
    params: { id },
  } = req;
  const prodServOne = await productService.getOneProduct(id);
  return res.status(200).json(prodServOne);
};

export const createProduct = async (req: Request, res: Response): Promise<Response<IProduct[]>> => {
  const { ...prod } = req.body;
  await middleware.validate(prod, productSchema);
  const createProduct = await productService.createProduct(prod);
  return res.status(201).json(createProduct);
};

export const editProduct = async (req: Request, res: Response): Promise<Response<IProduct>> => {
  const {
    params: { id },
  } = req;
  const { ...product } = req.body;
  if (req.method === "PUT") {
    await middleware.partialValidade(product, partialProductSchema);
  }
  const putProduct = await productService.editProduct(id, product);
  return res.status(200).json(putProduct);
};

export const deleteProduct = async (req: Request, res: Response): Promise<Response<void>> => {
  const {
    params: { id },
  } = req;
  productService.deleteProduct(id);
  return res.status(200);
};
