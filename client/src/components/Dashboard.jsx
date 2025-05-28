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
            await signOut(auth);
        }
        localStorage.removeItem("token");
        setFirebaseUser(null);
        setMongoUser(null);
        navigate("/signin");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
                {firebaseUser ? (
                    <div className="text-center">
                        <img src={`https://i.pravatar.cc/150?u=${firebaseUser.email}`} alt="Avatar" className="w-24 h-24 mx-auto rounded-full mb-4" />
                        <p className="text-lg font-semibold">{firebaseUser.displayName || "Firebase User"}</p>
                        <p className="text-sm text-gray-600">{firebaseUser.email}</p>
                    </div>
                ) : mongoUser ? (
                    <div className="text-center">
                        <img src={`https://i.pravatar.cc/150?u=${mongoUser.email}`} alt="Avatar" className="w-24 h-24 mx-auto rounded-full mb-4" />
                        <p className="text-lg font-semibold">{mongoUser.username}</p>
                        <p className="text-sm text-gray-600">{mongoUser.email}</p>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Loading user...</p>
                )}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
