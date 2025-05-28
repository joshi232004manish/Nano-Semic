// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'product.model' },
        quantity: Number
    }],
    totalPrice: Number,
  status: { type: String, enum: ['Pending', 'Processing', 'Completed', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export default  mongoose.model('Order', orderSchema);