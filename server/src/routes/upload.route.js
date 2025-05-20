import { uploadImage } from '../controllers/upload.controller.js';
import express from 'express';
import upload from '../middlewares/multer.js'; 

const router = express.Router();

router.post("/upload", upload.single("image"),uploadImage);
export default router;
