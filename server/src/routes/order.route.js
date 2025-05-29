import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from '../controllers/order.controller.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/get', getAllOrders);
router.get('/get/:id', getOrderById);
router.put('/update/:id', updateOrderStatus);
router.delete('/delete/:id', deleteOrder);

export default router;
