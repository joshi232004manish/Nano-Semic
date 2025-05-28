import React from 'react';

const AdminOrdersDashboard = () => {
  // Dummy static order data
  const orders = [
    {
      _id: 'order1',
      user: { email: 'admin1@example.com' },
      products: [
        { product: { name: 'T-Shirt' }, quantity: 2 },
        { product: { name: 'Sneakers' }, quantity: 1 }
      ],
      totalPrice: 1800,
      status: 'Pending',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'order2',
      user: { email: 'admin2@example.com' },
      products: [
        { product: { name: 'Backpack' }, quantity: 1 }
      ],
      totalPrice: 1200,
      status: 'Completed',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'order3',
      user: { email: 'admin3@example.com' },
      products: [
        { product: { name: 'Headphones' }, quantity: 1 },
        { product: { name: 'Laptop Stand' }, quantity: 1 }
      ],
      totalPrice: 3000,
      status: 'Processing',
      createdAt: new Date().toISOString()
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Orders Dashboard (Dummy Data)</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Admin (User)</th>
              <th className="px-4 py-2">Products</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="border-t">
                <td className="px-4 py-2">{order._id}</td>
                <td className="px-4 py-2">{order.user?.email || 'N/A'}</td>
                <td className="px-4 py-2">
                  <ul className="list-disc pl-4">
                    {order.products.map((item, index) => (
                      <li key={index}>
                        {item.product?.name || 'Unnamed'} × {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2">₹{order.totalPrice}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-white ${
                    order.status === 'Pending' ? 'bg-yellow-500' :
                    order.status === 'Processing' ? 'bg-blue-500' :
                    order.status === 'Completed' ? 'bg-green-600' :
                    'bg-red-500'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrdersDashboard;
