import { Request, Response } from "express";
import { connectionDB } from "../database";
import { Products } from "../interfaces/products/products.interface";
import * as productService from "../services";

export const getAllProducts = async (req: Request, res: Response): Promise<Response<Products>> => {
  // const db = (await connectionDB()).connection.collection("teste");
  const pd = await productService.getAllProducts();
  return res.status(200).json(pd);
};
