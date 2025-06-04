import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:3000/api/orders/my-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p>Loading your orders...</p>;
  if (error) return <p>Error: {error}</p>;
  if (orders.length === 0) return <p>No orders found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">My Orders</h1>
      {orders.map((order) => (
        <div
          key={order._id}
          className="border rounded-md p-4 mb-6 shadow hover:shadow-lg transition"
        >
          <div className="flex justify-between mb-3">
            <div>
              <p className="font-semibold">
                Order ID: <span className="text-sm font-normal">{order._id}</span>
              </p>
              <p className="text-sm text-gray-600">
                Placed on: {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
            <div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${order.status === "Delivered"
                    ? "bg-green-100 text-green-800"
                    : order.status === "Cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
              >
                {order.status}
              </span>
            </div>
            {order.status === "Other" && order.statusMessage && (
              <p className="text-sm text-gray-600 mt-1 italic">
                Note: {order.statusMessage}
              </p>
            )}

          </div>

          <div className="mb-3">
            <h3 className="font-semibold mb-1">Products:</h3>
            <ul className="list-disc list-inside space-y-1">
              {order.products.map(({ product, quantity }) => (
                <li key={product._id}>
                  {product.title} x {quantity}
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-2">
            <strong>Total Price:</strong> ₹{order.totalPrice.toFixed(2)}
          </p>

          <div>
            <h3 className="font-semibold mb-1">Delivery Address:</h3>
            <p>
              {order.address.street}, {order.address.city}, {order.address.state}
            </p>
            <p>
              {order.address.zipCode}, {order.address.country}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersPage;
