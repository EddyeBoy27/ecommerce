import { Router } from "express";
import { getAllProducts } from "../controllers/products.controller";

const products: Router = Router();

// Products Routes
products.get("/", getAllProducts);

export { products };
