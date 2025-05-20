import cloudinary from "../../config/cloudinary.js";
import fs from "fs/promises";

import express from "express";


const router = express.Router();

export const uploadImage = async (req, res) => {
  try {
    if(!req.file){
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    // Cloudinary URL
    const imageUrl = req.file.path;

    res.status(200).json({
      message: "Image uploaded successfully",
      url: imageUrl,
    });

  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}






