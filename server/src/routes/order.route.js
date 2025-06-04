import express from 'express';
import {
  placeorder,
  getMyOrders,
  getOrderById,
 
} from '../controllers/order.controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/place',auth,placeorder);
router.get('/my-orders',auth, getMyOrders);

/*router.post('/create', createOrder);
router.get('/get', getAllOrders);
router.get('/get/:id', getOrderById);
router.put('/update/:id', updateOrderStatus);
router.delete('/delete/:id', deleteOrder);
*/
export default router;
