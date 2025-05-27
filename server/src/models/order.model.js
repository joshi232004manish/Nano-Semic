// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  status: { type: String, enum: ['Pending', 'Processing', 'Completed', 'Cancelled'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});


export default  mongoose.model('Order', orderSchema);