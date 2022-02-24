import { Router } from "express";
import { getAllProducts, createProduct } from "../controllers/products.controller";

const products: Router = Router();

// Products Routes
products.get("/", getAllProducts);
products.post("/new", createProduct);

export { products };
