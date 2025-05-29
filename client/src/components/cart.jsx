import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/cart/items", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const cart = await response.json();
      if (cart && Array.isArray(cart.products)) {
        setCartItems(cart.products);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      setCartItems([]);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:3000/api/cart/update/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ quantity: newQuantity }),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      fetchCart();
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  const handleRemoveItem = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:3000/api/cart/remove/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setCartItems((prev) =>
        prev.filter((item) => item.product._id !== productId)
      );
    } catch (error) {
      console.error("Failed to delete item", error);
    }
  };

  const handleClearCart = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3000/api/cart/clear", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setCartItems([]);
    } catch (error) {
      console.error("Failed to clear cart", error);
    }
  };

  // Calculate subtotal using discounted prices
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = item.product?.price || 0;
      const discount = item.product?.discount || 0;
      const discountedPrice = price * (1 - discount / 100);
      return acc + discountedPrice * item.quantity;
    }, 0);
  };

  return (
     <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
    <div className="max-w-4xl mx-auto p-8 flex-grow rounded-lg shadow-lg flex flex-col">
      <AnimatePresence>
        {cartItems.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xl text-indigo-600 font-semibold"
          >
            Your cart is empty!
          </motion.p>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        <AnimatePresence>
          {cartItems.map((item) => {
            const price = item.product?.price || 0;
            const discount = item.product?.discount || 0;
            const discountedPrice = price * (1 - discount / 100);
            return (
              <motion.div
                key={item.product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div>
                  <h3 className="font-bold text-2xl text-indigo-900">
                    {item.product?.title || "Unknown Product"}
                  </h3>
                  <p className="text-indigo-600 mt-1 text-sm font-medium">
                    Product ID: {item.product?._id}
                  </p>
                  <p className="mt-2 font-semibold text-lg text-purple-700">
                    Price:{" "}
                    <span className="line-through text-red-400 mr-2">
                      ₹{price.toFixed(2)}
                    </span>
                    <span>₹{discountedPrice.toFixed(2)}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() =>
                      item.quantity > 1 &&
                      handleUpdateQuantity(item.product._id, item.quantity - 1)
                    }
                    className="p-3 bg-indigo-100 rounded-full hover:bg-indigo-200 transition shadow"
                    aria-label="Decrease quantity"
                  >
                    <FiMinus size={18} className="text-indigo-600" />
                  </button>

                  <motion.span
                    key={item.quantity}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-2xl font-semibold text-indigo-900 min-w-[40px] text-center"
                  >
                    {item.quantity}
                  </motion.span>

                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.product._id, item.quantity + 1)
                    }
                    className="p-3 bg-indigo-100 rounded-full hover:bg-indigo-200 transition shadow"
                    aria-label="Increase quantity"
                  >
                    <FiPlus size={18} className="text-indigo-600" />
                  </button>

                  <button
                    onClick={() => handleRemoveItem(item.product._id)}
                    className="p-3 ml-4 bg-red-500 rounded-full hover:bg-red-600 transition shadow text-white"
                    aria-label="Remove item"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {cartItems.length > 0 && (
        <>
          <div className="mt-8 text-right font-extrabold text-2xl text-indigo-900">
            Subtotal: ₹{calculateSubtotal().toFixed(2)}
          </div>

          <button
            onClick={handleClearCart}
            className="mt-6 w-full md:w-1/3 mx-auto block bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold text-xl py-4 rounded-lg shadow-lg hover:from-red-700 hover:to-red-800 transition"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
    </div>
  );
};

export default Cart;
