
import { errorHandler } from "../utils/error.js";
import Order from "../models/Order.js";
import user from "../models/Admin.js";
export const orderProduct = async(req,res,next)=>{
    const order = new Order({ user: req.user.id, products: req.body.products, totalPrice: req.body.totalPrice});

    await order.save();
    res.status(201).json(order);
   
}
