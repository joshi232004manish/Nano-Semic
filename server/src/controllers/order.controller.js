import Order from '../models/order.model.js';

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { user, products, totalPrice, status, statusMessage } = req.body;

    const newOrder = new Order({
      user,
      products,
      totalPrice,
      status,
      statusMessage
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while creating order.' });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching orders.' });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products.product');
    if (!order) return res.status(404).json({ message: 'Order not found.' });

    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching order.' });
  }
};

// Update order status or message
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, statusMessage } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status, statusMessage },
      { new: true }
    );

    if (!order) return res.status(404).json({ message: 'Order not found.' });

    res.status(200).json({ message: 'Order updated successfully.', order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while updating order.' });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found.' });

    res.status(200).json({ message: 'Order deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while deleting order.' });
  }
};
