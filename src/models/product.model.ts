import { IProducts } from "../interfaces/products/products.interface";
import { connectionDB, closeDB } from "../database";
import { IProduct } from "../interfaces/products/single.product.interface";
import { Errback } from "express";
import { isValidObjectId } from "mongoose";
import { ObjectID } from "bson";

export const getAllProducts = async (): Promise<IProducts> => {
  const db = (await connectionDB()).collection("Product");
  const products = await db.find<IProduct>({}).toArray();
  const items = { items: products, totalEntries: products.length };
  await closeDB();
  return items;
};

export const getOneProduct = async (id: string): Promise<IProduct[] | Errback | any> => {
  const db = (await connectionDB()).collection("Product");
  const product = isValidObjectId(id) ? await db.find({ _id: new ObjectID(id) }).toArray() : false;
  if (!product) {
    const error = { error: { message: "Product not exists or not found." }, code: "NOT_FOUND" };
    throw error;
  }
  return product;
};

export const createProduct = async (prod: IProduct): Promise<IProduct | any> => {
  const db = (await connectionDB()).collection("Product");
  const newProd = await db.insertOne(prod);
  return newProd;
};
