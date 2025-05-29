import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  totalPrice: Number,
  status: { 
    type: String, 
    enum: ['Pending', 'Processing', 'Out For Delivery', 'Delivered', 'Cancelled', 'Other'], 
    default: 'Pending' 
  },
  statusMessage: {
    type: String,
    default: '',
    trim: true,
  },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Order', orderSchema);