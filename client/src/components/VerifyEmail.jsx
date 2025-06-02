// VerifyEmail.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from './UserContext';
import { useModal } from '../context/loginBox'; // Adjust the import path as needed

const VerifyEmail = ({ email }) => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const { setUser } = useUser();
  const { setIsLoginOpen } = useModal(); // Use context for login modal state

  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:3000/api/admin/verify-email", {
        email,
        code,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify({
        username: res.data.username,
        email: res.data.email,
      }));

      setUser({ username: res.data.username, email: res.data.email });

      setVerified(true);
      // setMessage("✅ Email verified successfully! Redirecting...");
      setIsLoginOpen(false);
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setMessage(err.response?.data?.msg || "❌ Verification failed.");
    }
  };

  return (
    <>
    {/* <div className="p-6 bg-[#9ebed1] text-white rounded-xl shadow-lg border border-blue-600 max-w-md mx-auto mt-16 animate-fade-in"> */}
      <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-4 text-center text-sky-500">
        Verify Your Email
      </h2>

      {!verified ? (
        <>
          <p className="text-sm mb-4 text-[#5d6ca4] text-center">
            We've sent a verification code to <span className="font-medium text-[#3074c6]">{email}</span>. Please enter it below:
          </p>
          <form onSubmit={handleVerify}>
            <div>
            <label className="block text-sm font-medium text-[#323b5a] mb-2">
              Verification Code 
              </label>
            <input
              type="text"
              
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mb-4 w-full px-4 py-2 border border-blue-500 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
            >
              Verify
            </button>
          </form>
        </>
      ) : (
        <p className="text-green-400 text-center text-lg font-medium mt-4">{message}</p>
      )}

      {!verified && message && (
        <p className="mt-3 text-center text-red-400 text-sm">{message}</p>
      )}
     </div>

    </>
  );
};

export default VerifyEmail;
