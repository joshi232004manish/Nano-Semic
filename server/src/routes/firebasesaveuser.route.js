// routes/user.routes.js
import express from 'express';
import { saveFirebaseUser } from '../controllers/admin.controller.js';
const router = express.Router();

router.post('/saveUser', saveFirebaseUser);
export default router;
