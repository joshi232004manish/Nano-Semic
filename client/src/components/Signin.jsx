// src/pages/Signin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { signInWithGoogle } from "../components/Auth"; // assumes you already have this
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
        const response = await axios.post('http://localhost:3000/api/admin/login', {
                email: formData.email,
                password: formData.password,
            });
      //await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert(`welcome Back 🥳, ${response.data.username}`);
      //console.log(response.data);
       // Save token in localStorage (or sessionStorage)
      localStorage.setItem('token', response.data.token);

      navigate("/dashboard"); // Change this to your actual route
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    setError("");
    setLoading(true);
    try {
      const user = await signInWithGoogle();
      alert(`Welcome, ${user.displayName || user.email}!`);
      navigate("/dashboard"); // Redirect after Google login
    } catch (err) {
      console.error(err);
      setError("Google Sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

        {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500 text-sm">OR</div>

        <button
          onClick={handleGoogleSignin}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          disabled={loading}
        >
          Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
