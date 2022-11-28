import express from "express";
import { createOrder, deleteOrder, getAllOrders, getSingleOrder, myOrders, updateOrder } from "../controller/orderController.js";
const router = express();
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";


router.post('/order/new', isAuthenticatedUser, createOrder);
router.get('/order/:id', isAuthenticatedUser, getSingleOrder);
router.get('/orders/me', isAuthenticatedUser, myOrders);
router.get("/admin/orders", isAuthenticatedUser, authorizeRoles("admin"), getAllOrders); //Admin
router.put("/admin/order/:id", isAuthenticatedUser, authorizeRoles("admin"), updateOrder);//Admin 
router.delete("/admin/order/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);//Admin


export default router;