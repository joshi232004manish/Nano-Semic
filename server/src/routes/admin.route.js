// routes/adminRoutes.js
import express from 'express'
import adminController from '../controllers/admin.controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();
router.post('/signup',adminController.signup)
router.post('/login', adminController.login);
router.post("/verify-email", adminController.verifyEmail);
router.get('/profile',auth,adminController.profile);
router.get('/orders', auth, adminController.getOrders);
router.put('/orders/:id', auth, adminController.updateOrderStatus);
router.get('/stats', auth, adminController.getOrderStats);

export default router;