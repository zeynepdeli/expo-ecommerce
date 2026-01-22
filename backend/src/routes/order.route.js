import {Router} from "express"
import {protectRoute} from "../middleware/auth.middleware.js"

const router = Router()

router.post("/", protectRoute, createOrder)
router.get("/", protectRoute, getUserOrders)

export default router