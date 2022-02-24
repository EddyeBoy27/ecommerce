import { Request, Response } from "express";
import { IProducts } from "../interfaces/products/products.interface";
import * as productService from "../services";

export const getAllProducts = async (
  _req: Request,
  res: Response
): Promise<Response<IProducts>> => {
  const prodServAll = await productService.getAllProducts();
  return res.status(200).json(prodServAll);
};
