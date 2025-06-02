// VerifyEmail.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const VerifyEmail = ({ email }) => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  

  const navigate = useNavigate();
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
     const res= await axios.post("http://localhost:3000/api/admin/verify-email", { email, code });
      localStorage.setItem('token', res.data.token);
     
      localStorage.setItem('user', JSON.stringify({
        username: res.data.username,
        email: res.data.email,
      }));
      
      setVerified(true);
      setMessage("Email verified successfully! Redirecting...");

      // ✅ Redirect after delay
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Verification failed.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Verify Email</h2>
      {!verified ? (
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mb-4 p-2 border w-full"
            required
          />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Verify</button>
        </form>
      ) : (
        <p className="text-green-600">{message}</p>
      )}
      <p className="mt-2 text-red-500">{message}</p>
    </div>
  );
};

export default VerifyEmail;
