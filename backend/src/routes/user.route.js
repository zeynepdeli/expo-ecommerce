import {Router} from "express"
import {addAddress,getAddresses,updateAddress,deleteAddress,addToWishlist,removeFromWishlist,getWishlist} from "../controllers/user.controller.js"

const router = Router();

router.use(protectRoute)


//address routes
router.post("/addresses",  addAddress)
router.get("/addresses",  getAddresses)
router.put("/addresses/:adressId", updateAddress)
router.delete("/addresses/:adressId",  deleteAddress)

//wishlist routes

router.post("/wishlish" , addToWishlist)
router.delete("/wishlish/:productId" , removeFromWishlist)
router.get("/wishlish" , getWishlist)

export default router

