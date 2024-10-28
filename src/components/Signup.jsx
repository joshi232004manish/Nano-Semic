import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false); // For loading state
    const [error, setError] = useState(""); // For error messages

    const navigate = useNavigate(); // For redirection

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Clear previous error messages
        try {
            const response = await axios.post('http://localhost:4000/api/signup', registerData);
            console.log(response);

            alert('Registration successful!');
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err) {
            console.log(err);
            setError('Registration failed. Please try again.'); // Set error message
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-blue-100">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
                <h4 className="text-center text-xl font-semibold mb-4">Signup Page</h4>
                
                {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">{error}</div>}

                <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your username"
                            onChange={handleRegisterChange}
                            value={registerData.username}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your email"
                            onChange={handleRegisterChange}
                            value={registerData.email}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your password"
                            onChange={handleRegisterChange}
                            value={registerData.password}
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
                        {loading ? "Signing Up..." : "Signup"}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already registered? <Link to='/signin' className="text-blue-600 hover:text-blue-500">Signin</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
