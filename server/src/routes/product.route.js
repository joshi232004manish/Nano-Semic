import express from 'express'
import Product from '../models/product.model.js';
import { createProduct, getProduct, getProducts } from '../controllers/product.controller.js';


const router = express.Router();

router.post('/create' , createProduct);
// router.delete('/delete/:id',deleteListing);
// router.post('/update/:id',updateListing);
router.get('/get/:id',getProduct);
router.get('/get',getProducts);

export default  router;