import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Set loading state
        setError("");  // Reset error state
        try {
            const response = await axios.post('http://localhost:4000/api/signin', data);
            console.log(response);
            alert('Login successful');
            navigate('/home'); // Redirect to the AddBook component after successful login
        } catch (error) {
            console.log(error);
            setError("Login failed. Please check your email and password.");
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-blue-100">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
                <h4 className="text-center text-2xl font-semibold mb-6">Sign-In</h4>
                
                {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleLoginChange}
                            value={data.email}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleLoginChange}
                            value={data.password}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign-In"}
                    </button>

                    <div className="mt-3 text-center">
                        <Link to="/forgot-password" className="text-blue-600 hover:text-blue-500">Forgot password?</Link>
                    </div>
                    <p className="mt-3 text-center text-sm text-gray-600">By logging in, you agree to our terms and conditions.</p>
                    <Link
                        to='/signup'
                        className="mt-4 inline-block text-center w-full bg-gray-200 py-2 rounded-md hover:bg-gray-300 text-gray-700 transition duration-150 ease-in-out"
                    >
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Signin;
