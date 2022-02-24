import { ObjectSchema } from "joi";
import { IProduct } from "../interfaces/products/single.product.interface";

export const validate = async (obj: IProduct, schema: ObjectSchema): Promise<boolean | void> => {
  try {
    const val = await schema.validateAsync(obj);
    if (val) return true;
  } catch (err) {
    const error = { error: { message: err, code: "Invalid data" } };
    throw error;
  }
};
