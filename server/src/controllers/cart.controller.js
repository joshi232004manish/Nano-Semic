import Admin from '../models/admin.model.js';
import { Cart } from '../models/cart.model.js';
import Product from '../models/product.model.js'

// Helper function to calculate discounted price
const getDiscountedPrice = (product) => {
  if (!product.discount || product.discount <= 0) return product.price;
  return product.price * (1 - product.discount / 100);
}

export const addToCart = async (req, res) => {
  try {
    const { useremail, productId, quantity } = req.body;

    const userId = await Admin.findOne({ email: useremail }).select('_id');
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity }],
        totalPrice: getDiscountedPrice(product) * quantity,
      });
    } else {
      const existingProduct = cart.products.find(
        (item) => item.product.toString() === productId
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }

      // Recalculate totalPrice using discounted prices
      let total = 0;
      for (const item of cart.products) {
        const prod = await Product.findById(item.product);
        if (prod) {
          total += getDiscountedPrice(prod) * item.quantity;
        }
      }
      cart.totalPrice = total;
    }

    await cart.save();
    res.status(200).json(cart);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all cart items for logged-in user
export const getCartItems = async (req, res) => {
  try {
    const userId = req.user.id; // from JWT token
    const cart = await Cart.findOne({ user: userId }).populate("products.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cart items" });
  }
};

// Update cart item quantity and recalc total with discount
export const updateCartItem = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const userId = req.user?.id;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productInCart = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (!productInCart) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    productInCart.quantity = quantity;

    let total = 0;
    for (const item of cart.products) {
      const prod = await Product.findById(item.product);
      if (prod) {
        total += getDiscountedPrice(prod) * item.quantity;
      }
    }
    cart.totalPrice = total;

    await cart.save();

    res.status(200).json({
      message: 'Cart item quantity updated successfully',
      cart,
    });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Remove item from cart and recalc total using discount
export const removeCartItem = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.products = cart.products.filter(
      (item) => item.product.toString() !== productId
    );

    let total = 0;
    for (const item of cart.products) {
      const prod = await Product.findById(item.product);
      if (prod) {
        total += getDiscountedPrice(prod) * item.quantity;
      }
    }
    cart.totalPrice = total;

    await cart.save();

    res.status(200).json({ message: 'Item removed from cart', cart });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Clear cart remains same
export const clearCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.products = [];
    cart.totalPrice = 0;

    await cart.save();

    res.status(200).json({ message: 'Cart cleared successfully', cart });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error clearing cart' });
  }
};
