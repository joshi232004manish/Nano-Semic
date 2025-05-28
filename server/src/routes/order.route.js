import express from 'express'
import Order from '../models/Order.js';
import { orderProduct} from '../controllers/order.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/createorder' , auth,orderProduct);
// router.delete('/delete/:id',deleteListing);
// router.post('/update/:id',updateListing);
//router.get('/get/:id',getProduct);
//router.get('/get',getProducts);

export default  router;