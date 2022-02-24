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

export const createProduct = async (req: Request, res: Response): Promise<Response<IProduct>> => {
  await middleware.validate(req.body, productSchema);
  const createProduct = await productService.createProduct<IProduct>(req.body);
  return res.status(201).json(createProduct);
};
