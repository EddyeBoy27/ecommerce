import { Model, Schema, model } from "mongoose";
import { ProductDoc } from "../interfaces/products/single.product.doc";
import { IProduct } from "../interfaces/products/single.product.interface";

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  value: { type: Number, required: true },
  stars: { type: Number, required: true },
  discountCoupon: { type: Boolean, required: true },
  inventory: { type: Number, required: true },
  category: { type: String, required: true },
});

interface ProductModelInterface extends Model<ProductDoc> {
  build(attr: IProduct): ProductDoc;
}
export const ProductModel = model<ProductDoc, ProductModelInterface>("Product", ProductSchema);
