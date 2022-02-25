import { Request, Response } from "express";
import { IProducts } from "../interfaces/products/products.interface";
import { IProduct } from "../interfaces/products/single.product.interface";
import * as productService from "../services";
import * as middleware from "../middlewares";
import { productSchema } from "../middlewares/schemas";

export const getAllProducts = async (
  _req: Request,
  res: Response
): Promise<Response<IProducts>> => {
  const prodServAll = await productService.getAllProducts();
  return res.status(200).json(prodServAll);
};

export const getOneProduct = async (
  req: Request,
  res: Response
): Promise<Response<IProduct> | any> => {
  const {
    params: { id },
  } = req;
  const prodServOne = await productService.getOneProduct(id);
  return res.status(200).json(prodServOne);
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response<IProduct | Error>> => {
  await middleware.validate(req.body, productSchema);
  const createProduct = await productService.createProduct(req.body);
  return res.status(201).json(createProduct);
};
