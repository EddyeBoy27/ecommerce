import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getOneProduct,
  editProduct,
  deleteProduct,
} from "../controllers/products.controller";

const products: Router = Router();

// Products Routes
products.get("/", getAllProducts);
products.get("/:id", getOneProduct);
products.post("/new", createProduct);
products.put("/:id", editProduct);
products.delete("/:id", deleteProduct);

export { products };
