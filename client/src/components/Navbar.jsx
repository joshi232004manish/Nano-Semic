import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [mongoUser, setMongoUser] = useState(null);

  // Toggle mobile nav menu
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Firebase user observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setFirebaseUser(currentUser);
    });

    // Check MongoDB JWT token
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:3000/api/admin/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => setMongoUser(res.data))
        .catch(() => localStorage.removeItem("token"));
    }

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (firebaseUser) {
       localStorage.removeItem("user");
       localStorage.removeItem("token");
      await signOut(auth);
      setFirebaseUser(null);
    }
    if (mongoUser) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setMongoUser(null);
    }
    alert("Successfully logged out!");
    navigate("/signin");
  };

  // Determine if user is logged in (either Firebase or MongoDB)
  const isLoggedIn = firebaseUser || mongoUser;

  return (
    <>
      <nav className="bg-black py-5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between md:px-2 sm:px-2">
          <div className="flex text-2xl items-center gap-2">
            <img src={logo} alt="Logo" className="w-12" />
            <span className="text-white py-2 text-xl font-semibold">nanosemic</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <ul className="text-white text-bold text-lg font-bold flex gap-10 hover:cursor-pointer">
              <li className="hover:cursor-pointer">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/pro">Product</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {isLoggedIn && (
                <li>
                  <NavLink to="/dashboard">Profile</NavLink>
                </li>
              )}
            </ul>

            {!isLoggedIn && (
              <>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-white text-black rounded-full py-1 px-4 hover:cursor-pointer text-lg font-semibold"
                >
                  Signup
                </button>
                <button
                  onClick={() => navigate("/signin")}
                  className="bg-white text-black rounded-full py-1 px-4 hover:cursor-pointer text-lg font-semibold"
                >
                  Signin
                </button>
              </>
            )}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-white text-black rounded-full py-1 px-4 hover:cursor-pointer text-lg font-semibold"
              >
                Logout
              </button>
            )}
          </div>

          <div className="md:hidden" onClick={handleNav}>
            {!nav ? (
              <AiOutlineMenu size={25} className="text-white cursor-pointer" />
            ) : (
              <AiOutlineClose size={25} className="text-white cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[250px] bg-ogcolor text-white z-50 transform ${nav ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center px-4 py-5">
            <img src={logo} alt="Logo" className="w-12" />
            <AiOutlineClose
              size={25}
              className="text-white cursor-pointer"
              onClick={handleNav}
            />
          </div>
          <ul className="flex flex-col gap-4 px-4 mt-8">
            <li onClick={handleNav}>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li onClick={handleNav}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={handleNav}>
              <NavLink to="/pro">Product</NavLink>
            </li>
            <li onClick={handleNav}>
              <NavLink to="/services">Services</NavLink>
            </li>
            {isLoggedIn && (
              <li onClick={handleNav}>
                <NavLink to="/dashboard">Profile</NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    navigate("/signup");
                    handleNav();
                  }}
                  className="bg-white text-black rounded-full py-2 px-4 mt-4 text-lg font-semibold"
                >
                  Signup
                </button>
                <button
                  onClick={() => {
                    navigate("/signin");
                    handleNav();
                  }}
                  className="bg-white text-black rounded-full py-2 px-4 mt-4 text-lg font-semibold"
                >
                  Signin
                </button>
              </>
            )}
            {isLoggedIn && (
              <button
                onClick={() => {
                  handleLogout();
                  handleNav();
                }}
                className="bg-white text-black rounded-full py-2 px-4 mt-4 text-lg font-semibold"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
