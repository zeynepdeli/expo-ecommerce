import {Router} from "express"
import {addAddress,getAddresses,updateAddress,deleteAddress,addToWishlist,removeFromWishlist,getWishlist} from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";


const router = Router();

router.use(protectRoute)


//address routes
router.post("/addresses",  addAddress)
router.get("/addresses",  getAddresses)
router.put("/addresses/:adressId", updateAddress)
router.delete("/addresses/:adressId",  deleteAddress)

//wishlist routes

router.post("/wishlist" , addToWishlist)
router.delete("/wishlist/:productId" , removeFromWishlist)
router.get("/wishlist" , getWishlist)

export default router

