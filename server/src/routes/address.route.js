import express from 'express'
import {updateAddress,getAddress} from '../controllers/admin.controller.js';
import auth from '../middlewares/auth.js';
import { get } from 'mongoose';


const router = express.Router();
//it is that route to save user address to the admin/user model
router.post('/update/address',auth,updateAddress);
router.get('/my/address',auth,getAddress);
export default router;