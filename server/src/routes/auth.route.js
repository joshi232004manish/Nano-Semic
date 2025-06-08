import express from 'express';
const router = express.Router();

import dotenv from 'dotenv';
import { contact,query } from '../controllers/auth.controller.js';

dotenv.config();
router.post('/contact', contact);
router.post('/query', query);
export default router;
