import { Router } from "express"
import { protectRoute, adminOnly } from "../middleware/auth.middlware.js"
import {
  createProduct,
  getAllProducts,
  updateProduct,
  getAllOrders,
  updateOrderStatus,
  getAllCustomers,
  getDashboardStats
} from "../controllers/admin.controller.js";

import { upload } from "../middleware/multer.middleware.js"
const router = Router();

//optimization - DRY
router.use(protectRoute, adminOnly)

router.post("/products", upload.array("images", 3), createProduct)
router.get("/products", getAllProducts)
router.put("/products/:id",upload.array("images", 3), updateProduct)

router.get("/orders", getAllOrders)
router.patch("/orders/:orderId/status", updateOrderStatus)

//PUT:Used for full resource replacement, updating the entire resource
//PATCH:Used for partial RESOURCE updates, updating a specific part of the resource

router.get("/customers", getAllCustomers)

router.get("/stats", getDashboardStats)

export default router