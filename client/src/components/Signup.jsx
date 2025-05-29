import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signInWithGoogle } from "../components/Auth";
import VerifyEmail from "./VerifyEmail";
import { useUser } from './UserContext';

const Signup = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const { user, setUser } = useUser();

    const navigate = useNavigate();

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    const handleGoogleSignup = async () => {
        try {
            const user = await signInWithGoogle();
            const idToken = await user.getIdToken();

            await fetch("http://localhost:3000/api/auth/google-signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ idToken })
            });
           // localStorage.setItem('token', user.token);
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
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await axios.post('http://localhost:3000/api/admin/signup', {
                
                username: registerData.username,
                email: registerData.email,
                password: registerData.password,
            });

            alert("Verification code sent to your email.");
            setEmail(registerData.email);
            setStep(2);
        } catch (err) {
            setError(err.response?.data?.msg || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return step === 1 ? (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="bg-[#18181b] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800">
                <h4 className="text-center text-2xl font-extrabold mb-6 text-white tracking-wide">Signup</h4>

                {error && (
                    <div className="bg-red-600 bg-opacity-20 text-red-400 p-2 rounded mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 block w-full px-3 py-2 bg-black border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your username"
                            onChange={handleRegisterChange}
                            value={registerData.username}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 bg-black border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your email"
                            onChange={handleRegisterChange}
                            value={registerData.email}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 bg-black border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your password"
                            onChange={handleRegisterChange}
                            value={registerData.password}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-gray-200 transition mb-4 shadow ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Signup"}
                    </button>
                </form>

                <p className="mt-2 text-center text-sm text-gray-400">
                    Already registered?{" "}
                    <Link to='/signin' className="text-white underline hover:text-blue-400 transition">Signin</Link>
                </p>
                <button
                    onClick={handleGoogleSignup}
                    className="mt-6 w-full bg-red-600 text-white font-semibold py-2 rounded-full hover:bg-red-700 transition shadow"
                >
                    Continue with Google
                </button>
            </div>
        </div>
    ) : (
        <VerifyEmail email={email} />
    );
};

export default Signup;
