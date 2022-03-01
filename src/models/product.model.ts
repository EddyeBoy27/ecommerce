import { IProducts } from "../interfaces/products/products.interface";
import { connectionDB, closeDB } from "../database";
import { IProduct } from "../interfaces/products/single.product.interface";
import { isValidObjectId } from "mongoose";
import { ObjectID } from "bson";
import { AnyError, ResumeOptions } from "mongoose/node_modules/mongodb";

export const getAllProducts = async (): Promise<IProducts> => {
  const db = (await connectionDB()).collection("Product");
  const products = await db.find<IProduct>({}).toArray();
  const items = { items: products, totalEntries: products.length };
  await closeDB();
  return items;
};

export const getOneProduct = async (id: string): Promise<IProduct[]> => {
  const db = (await connectionDB()).collection("Product");
  const product = isValidObjectId(id)
    ? await db.find<IProduct>({ _id: new ObjectID(id) }).toArray()
    : false;
  if (!product) {
    const error = { error: { message: "Product not exists or not found." }, code: "NOT_FOUND" };
    await closeDB();
    throw error;
  }
  return product;
};

export const createProduct = async (prod: IProduct): Promise<IProduct[]> => {
  const db = (await connectionDB()).collection("Product");
  try {
    const newProd = await db.insertOne(prod);
    const createdProd = await db
      .find<IProduct>({ _id: new ObjectID(newProd["insertedId"]) })
      .toArray();
    return createdProd;
  } catch (_: any) {
    const error = { error: { message: "Internal Error, verify logs" }, code: "INTERNAL_ERROR" };
    await closeDB();
    throw error;
  }
};

export const editProduct = async (id: string, prod: Partial<IProduct>): Promise<IProduct | any> => {
  return;
};
