import { Router } from "express";
import { getAllProducts, createProduct, getOneProduct } from "../controllers/products.controller";

const products: Router = Router();

// Products Routes
products.get("/", getAllProducts);
products.get("/:id", getOneProduct);
products.post("/new", createProduct);

export { products };
