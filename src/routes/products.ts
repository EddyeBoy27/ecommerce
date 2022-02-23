import { Router } from "express";
import { getAllProducts } from "../controllers/products.controller";
import { connectionDB } from "../database";

const products: Router = Router();

// Products Routes
products.get("/", getAllProducts);

export { products };
