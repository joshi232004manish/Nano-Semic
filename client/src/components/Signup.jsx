import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signInWithGoogle } from "../components/Auth";
import VerifyEmail from "./VerifyEmail"; // New verify component
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

            await fetch("http://localhost:5000/api/auth/google-signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ idToken })
            });

            alert(`Welcome, ${user.displayName || user.email}!`);
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Google Sign-in failed.");
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post('http://localhost:5000/api/admin/signup', {
                username: registerData.username,
                email: registerData.email,
                password: registerData.password,
            });

            alert("Verification code sent to your email.");
            setEmail(registerData.email);
           // setUser(response);
            setStep(2);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.msg || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return step === 1 ? (
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            placeholder="Enter your password"
                            onChange={handleRegisterChange}
                            value={registerData.password}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Signup"}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already registered? <Link to='/signin' className="text-blue-600 hover:text-blue-500">Signin</Link>
                </p>
                <button
                    onClick={handleGoogleSignup}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
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
