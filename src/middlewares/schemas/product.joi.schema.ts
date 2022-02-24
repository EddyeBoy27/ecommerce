import Joi from "joi";
import { IProduct } from "../../interfaces/products/single.product.interface";

export const productSchema = Joi.object<IProduct>().keys({
  title: Joi.string().min(10).required(),
  description: Joi.string().min(10).required(),
  image: Joi.string().min(10),
  value: Joi.number().min(0).required(),
  stars: Joi.number().min(0).max(5).required(),
  discountCoupon: Joi.boolean().required(),
  inventory: Joi.string().min(0).required(),
  category: Joi.string().min(5).required(),
});
