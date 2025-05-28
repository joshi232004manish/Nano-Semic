import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    includes: '',
    price: '',
    category: '',
    stock: '',
    discount: '',
    imageUrls: [],
  });
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all products on load
 /* useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products/get');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
*/
  const handleImageUpload = async () => {
    if (!image) return [];

    const form = new FormData();
    form.append('image', image);

    try {
      const res = await axios.post('http://localhost:3000/api/product/upload', form);
      return [res.data.url]; // array to match schema
    } catch (error) {
      console.error('Image upload error:', error);
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrls = await handleImageUpload();

      const productData = {
        ...formData,
        imageUrls,
        includes: formData.includes.split(',').map(i => i.trim()),
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        discount: parseInt(formData.discount),
      };

      await axios.post('http://localhost:3000/api/product/create', productData);
      alert('Product created!');
      setFormData({
        title: '',
        description: '',
        includes: '',
        price: '',
        category: '',
        stock: '',
        discount: '',
        imageUrls: [],
      });
      setImage(null);
    } catch (error) {
      console.error('Product creation error:', error);
      alert('Failed to create product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 max-w-lg"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="includes"
          placeholder="Includes (comma-separated)"
          value={formData.includes}
          onChange={(e) => setFormData({ ...formData, includes: e.target.value })}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="discount"
          placeholder="Discount (%)"
          value={formData.discount}
          onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
          className="w-full px-4 py-2 border rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Health Products">Health Products</option>
          <option value="Education Products">Education Products</option>
          <option value="Agriculture Products">Agriculture Products</option>
          <option value="Safety Products">Safety Products</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full"
          required
        />
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 rounded ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Product'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ProductForm;
