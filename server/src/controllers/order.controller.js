import Order from '../models/order.model.js';
import  {Cart}  from '../models/cart.model.js';
import Product from '../models/product.model.js';
// Place a new order
export const placeorder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { address, paymentMethod = 'Cash on Delivery' } = req.body;
console.log('userId:', userId);
//const cart = await Cart.findOne({ user: userId }).populate('products.product');


    const cart = await Cart.findOne({ user: userId }).populate('products.product');
    console.log('cart:', cart);
    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: 'Your cart is empty.' });
    }

    const formattedProducts = cart.products.map(item => ({
      product: item.product._id,
      quantity: item.quantity
    }));

    const newOrder = new Order({
      user: userId,
      products: formattedProducts,
      totalPrice: cart.totalPrice,
      address,
      paymentMethod,
      status: 'Pending',
      statusMessage: 'Order placed successfully.'
    });

    await newOrder.save();

    // Clear the cart
    cart.products = [];
    cart.totalPrice = 0;
    await cart.save();

    res.status(201).json({ message: 'Order placed successfully.', order: newOrder });
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ message: 'Internal server error while placing order.' });
  }
};

// Get logged-in user's orders
export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate('products.product');
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching user orders:', err);
    res.status(500).json({ message: 'Error fetching orders.' });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user')
      .populate('products.product');
    if (!order) return res.status(404).json({ message: 'Order not found.' });

    res.status(200).json(order);
  } catch (err) {
    console.error('Error fetching order by ID:', err);
    res.status(500).json({ message: 'Error retrieving order.' });
  }
};
