
import { errorHandler } from "../utils/error.js";
import Product from "../models/product.model.js";

export const createProduct = async(req,res,next)=>{
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        next(error);
    }
}




export const getProduct = async(req,res,next)=>{
    
    try {
    const product = await Product.findById(req.params.id);
    if(!product) return next(errorHandler(404,'product not found'));
    res.status(200).json(product);
    } catch (error) {
        next(error);
    }

}

export const getProducts = async(req,res,next)=>{

    try {
       
    const products = await Product.find()
    return res.status(200).json(products);



    } catch (error) {
        next(error);
    }
}