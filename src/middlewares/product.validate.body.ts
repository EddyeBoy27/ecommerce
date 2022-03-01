import { ObjectSchema } from "joi";

import { IProduct } from "../interfaces/products/single.product.interface";

export const validate = async (obj: IProduct, schema: ObjectSchema): Promise<boolean | void> => {
  try {
    const val = await schema.validateAsync(obj);
    if (val) return true;
  } catch (err: any) {
    const { message } = err;
    const error = { error: { message, type: err["details"][0]["type"] }, code: "BAD_REQUEST" };
    throw error;
  }
};

export const partialValidade = async (
  obj: Partial<IProduct>,
  schema: ObjectSchema
): Promise<boolean | void> => {
  try {
    const val = await schema.validateAsync(obj);
    if (val) return true;
  } catch (err: any) {
    const { message } = err;
    const error = { error: { message, type: err["details"][0]["type"] }, code: "BAD_REQUEST" };
    throw error;
  }
};
