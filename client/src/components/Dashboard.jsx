import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const [firebaseUser, setFirebaseUser] = useState(null);
    const [mongoUser, setMongoUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setFirebaseUser(currentUser);
            }
        });

        const token = localStorage.getItem('token');
        if (token) {
            axios.get("http://localhost:3000/api/admin/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => setMongoUser(res.data))
                .catch(() => {
                    localStorage.removeItem("token");
                    navigate("/signin");
                });
        }

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        if (firebaseUser) {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            await signOut(auth);
        }
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setFirebaseUser(null);
        setMongoUser(null);
        navigate("/signin");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
            <div className="bg-[#18181b] shadow-2xl rounded-2xl p-8 w-full max-w-xl border border-gray-800">
                <h2 className="text-3xl font-extrabold mb-4 text-center text-white tracking-wide">Dashboard</h2>
                {firebaseUser ? (
                    <div className="text-center">
                        <img src={`https://i.pravatar.cc/150?u=${firebaseUser.email}`} alt="Avatar" className="w-24 h-24 mx-auto rounded-full mb-4 shadow-lg border-4 border-gray-700" />
                        <p className="text-xl font-semibold text-white">{firebaseUser.displayName || "Firebase User"}</p>
                        <p className="text-sm text-gray-300">{firebaseUser.email}</p>
                    </div>
                ) : mongoUser ? (
                    <div className="text-center">
                        <img src={`https://i.pravatar.cc/150?u=${mongoUser.email}`} alt="Avatar" className="w-24 h-24 mx-auto rounded-full mb-4 shadow-lg border-4 border-gray-700" />
                        <p className="text-xl font-semibold text-white">{mongoUser.username}</p>
                        <p className="text-sm text-gray-300">{mongoUser.email}</p>
                    </div>
                ) : (
                    <p className="text-center text-gray-400">Loading user...</p>
                )}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLogout}
                        className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
