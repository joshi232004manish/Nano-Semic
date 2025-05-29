import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { signInWithGoogle } from "../components/Auth";
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
      alert(`welcome Back 🥳, ${response.data.username}`);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify({
        username: response.data.username,
        email: response.data.email,
      }));
      console.log(response.data);
      navigate("/dashboard");
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
    //localStorage.setItem('token', user.token);
    // Save to localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: user.displayName || "Unknown",
        email: user.email,
      })
    );

    alert(`Welcome, ${user.displayName || user.email}!`);
    navigate("/dashboard");
  } catch (err) {
    setError("Google Sign-in failed.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-[#18181b] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-white tracking-wide">Sign In</h2>

        {error && (
          <div className="bg-red-600 bg-opacity-20 text-red-400 p-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-black border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="username"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 bg-black border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-gray-200 transition mb-4 shadow"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-400 text-sm">OR</div>

        <button
          onClick={handleGoogleSignin}
          className="w-full bg-red-600 text-white font-semibold py-2 rounded-full hover:bg-red-700 transition shadow"
          disabled={loading}
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white underline hover:text-blue-400 transition">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
