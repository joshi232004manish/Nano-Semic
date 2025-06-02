import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const [user, setUser] = useState({ username: "", email: "" });
  const [address, setAddress] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Fetch user details
    fetch("http://localhost:3000/api/admin/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setUser(data));

    // Get selected address from localStorage
    const selectedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
    if (selectedAddress) {
      setAddress(selectedAddress);
      setSelected(true);
    }

    // Fetch cart items
    fetch("http://localhost:3000/api/cart/items", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setCartItems(data.products || []));
  }, []);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.product.price || 0;
    const discount = item.product.discount || 0;
    const discountedPrice = price * (1 - discount / 100);
    return acc + discountedPrice * item.quantity;
  }, 0);

  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const totalPayable = subtotal + deliveryCharge;

 const handlePlaceOrder = async () => {
  if (!selected) return alert("Please confirm delivery address.");

  const address = JSON.parse(localStorage.getItem("selectedAddress"));
  if (!address || !address.street || !address.city || !address.state || !address.zipCode || !address.country) {
    return alert("Please select a complete delivery address.");
  }

  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:3000/api/orders/place", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      address,
      paymentMethod: "Cash on Delivery",
    }),
  });

  if (res.ok) {
    navigate("/order-success");
  } else {
    const errorData = await res.json();
    alert("Order failed: " + (errorData.message || "Try again."));
  }
};


  const handleDeliverHere = () => {
    setSelected(true);
    localStorage.setItem("selectedAddress", JSON.stringify(address));
  };

  const handleChangeAddress = () => {
    navigate("/address");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        {/* 1. User Credentials */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-indigo-800">Account Details</h2>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* 2. Delivery Address */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-indigo-800">Delivery Address</h2>
          {address ? (
            <div className="space-y-2">
              <p>{address.street}, {address.city}, {address.state}</p>
              <p>{address.zipCode}, {address.country}</p>

              {!selected ? (
                <button
                  className="mt-3 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                  onClick={handleDeliverHere}
                >
                  Deliver Here
                </button>
              ) : (
                <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked
                      readOnly
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Deliver to this address
                    </span>
                  </label>
                  <button
                    onClick={handleChangeAddress}
                    className="px-4 py-2 text-sm border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
                  >
                    Change Address
                  </button>
                </div>

              )}
            </div>
          ) : (
            <p>No address found.</p>
          )}
        </div>

        {/* 3. Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-indigo-800">Your Order</h2>
          {cartItems.map((item) => {
            const price = item.product.price || 0;
            const discount = item.product.discount || 0;
            const finalPrice = price * (1 - discount / 100);
            return (
              <div key={item.product._id} className="flex justify-between mb-2">
                <span>{item.product.title} x {item.quantity}</span>
                <span>₹{(finalPrice * item.quantity).toFixed(2)}</span>
              </div>
            );
          })}
        </div>
        {/* Change Cart Button */}
        <button
          onClick={() => navigate("/cart")}
          className="mt-4 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md text-sm hover:bg-indigo-50 transition w-fit"
        >
          Change Cart
        </button>

      </div>

      {/* Right Section: Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-bold text-indigo-800">Order Summary</h2>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</span>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-bold">
          <span>Total Payable</span>
          <span>₹{totalPayable.toFixed(2)}</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mt-6"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
