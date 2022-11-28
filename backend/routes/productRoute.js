import express from "express";
import { createProduct, createProductReview, deleteProduct, deleteReview, getAdminProducts, getAllProducts, getProductDetails, getProductReviews, updateProduct } from "../controller/productController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/products", getAllProducts)
router.get("/product/:id", getProductDetails)
router.get("/admin/products", isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts); //-- Admin
router.post("/admin/product/new", isAuthenticatedUser, authorizeRoles("admin"), createProduct)  //-- Admin
router.put("/admin/product/:id", isAuthenticatedUser, authorizeRoles("admin"), updateProduct) //-- Admin
router.delete("/admin/product/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteProduct) //-- Admin
router.put("/review", isAuthenticatedUser, createProductReview);
router.get("/reviews", getProductReviews);
router.delete("/review", isAuthenticatedUser, deleteReview);



export default router;