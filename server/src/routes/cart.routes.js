import express from 'express';
import {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  clearCart
} from '../controllers/cart.controller.js';
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post('/add', addToCart);
router.get("/items", auth, getCartItems);
router.put('/update/:productId',auth, updateCartItem);
router.delete('/remove/:productId',auth, removeCartItem);
router.put('/clear',auth, clearCart);

export default router;
