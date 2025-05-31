import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";
import LoginModal from "./login";
import { useModal } from "../context/loginBox"; // Adjust the import path as needed

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [mongoUser, setMongoUser] = useState(null);
  // const [showLogin, setShowLogin] = useState(false);
  const { isLoginOpen, setIsLoginOpen  } = useModal(); // Use context for login modal state
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
      axios
        .get("http://localhost:3000/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setMongoUser(res.data))
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
    // alert("Successfully logged out!");
    navigate("/");
  };

  // Determine if user is logged in (either Firebase or MongoDB)
  const isLoggedIn = firebaseUser || mongoUser;

  return (
    <>
      <nav className="bg-black py-5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between md:px-2 sm:px-2">
          <NavLink to="/">
            <div className="flex text-2xl items-center gap-2 mx-7">
              <img src="/logo1.png" alt="Logo" className="w-14" />
              <span className="text-white py-2 text-xl font-semibold">
                nanosemic
              </span>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-12 mx-7">
            <ul className="text-white text-bold text-lg font-bold flex gap-12 hover:cursor-pointer">
              {/* <li className="hover:cursor-pointer">
                <NavLink to="/home">Home</NavLink>
              </li> */}
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/pro">Products</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#FFFFFF
" fill="none">
    <defs />
    <path fill="currentColor" d="M8,22.75 C5.636,22.75 3.67,21.014 3.309,18.75 L2.5,18.75 C2.086,18.75 1.75,18.414 1.75,18 C1.75,17.586 2.086,17.25 2.5,17.25 L3.25,17.25 L3.25,12.75 L2.5,12.75 C2.086,12.75 1.75,12.414 1.75,12 C1.75,11.586 2.086,11.25 2.5,11.25 L3.25,11.25 L3.25,6.75 L2.5,6.75 C2.086,6.75 1.75,6.414 1.75,6 C1.75,5.586 2.086,5.25 2.5,5.25 L3.309,5.25 C3.67,2.986 5.636,1.25 8,1.25 L17.5,1.25 C20.119,1.25 22.25,3.381 22.25,6 L22.25,18 C22.25,20.619 20.119,22.75 17.5,22.75 Z M4.837,18.75 C5.177,20.182 6.466,21.25 8,21.25 L17.5,21.25 C19.292,21.25 20.75,19.792 20.75,18 L20.75,6 C20.75,4.208 19.292,2.75 17.5,2.75 L8,2.75 C6.466,2.75 5.177,3.818 4.837,5.25 L5,5.25 C5.414,5.25 5.75,5.586 5.75,6 C5.75,6.414 5.414,6.75 5,6.75 L4.75,6.75 L4.75,11.25 L5,11.25 C5.414,11.25 5.75,11.586 5.75,12 C5.75,12.414 5.414,12.75 5,12.75 L4.75,12.75 L4.75,17.25 L5,17.25 C5.414,17.25 5.75,17.586 5.75,18 C5.75,18.414 5.414,18.75 5,18.75 Z M11.04,17.748 C10.233,17.748 9.49,17.377 8.77,16.612 C8.269,16.074 8.218,15.554 8.262,15.212 C8.386,14.251 9.343,13.643 9.976,13.241 C10.05,13.195 10.116,13.153 10.174,13.114 C11.892,11.962 14.111,11.962 15.828,13.114 C15.884,13.151 15.951,13.194 16.024,13.24 C16.656,13.642 17.614,14.25 17.737,15.211 C17.781,15.553 17.729,16.073 17.233,16.607 C16.508,17.375 15.767,17.746 14.96,17.746 L14.96,17.748 Z M13,11.75 C11.484,11.75 10.25,10.516 10.25,9 C10.25,7.484 11.484,6.25 13,6.25 C14.516,6.25 15.75,7.484 15.75,9 C15.75,10.516 14.516,11.75 13,11.75 Z M11.007,14.36 L11.005,14.36 C10.939,14.405 10.863,14.454 10.781,14.506 L10.771,14.512 C10.515,14.675 9.783,15.142 9.75,15.402 C9.747,15.422 9.777,15.49 9.866,15.586 C10.297,16.042 10.66,16.247 11.04,16.247 L14.96,16.247 C15.342,16.247 15.705,16.042 16.138,15.583 C16.223,15.491 16.253,15.423 16.25,15.403 C16.215,15.14 15.465,14.663 15.219,14.507 L15.175,14.479 C15.109,14.437 15.049,14.398 14.995,14.362 C14.38,13.949 13.689,13.742 13,13.742 L13,13.742 C12.311,13.742 11.623,13.948 11.007,14.36 Z M13,7.75 C12.311,7.75 11.75,8.311 11.75,9 C11.75,9.689 12.311,10.25 13,10.25 C13.689,10.25 14.25,9.689 14.25,9 C14.25,8.311 13.689,7.75 13,7.75 Z" />
</svg> */}
                <NavLink to="/contact">Contact Us</NavLink> 
              </li>
              {isLoggedIn && (
                <li>
                  <NavLink to="/dashboard"><img className="h-[35px] w-[35px] rounded-full" src="/profile.webp" alt="" /></NavLink>
                </li>
              )}
            </ul>

            {!isLoggedIn && (
              <>
                {/* <button
                  onClick={() => navigate("/signup")}
                  className="bg-white text-black rounded-full py-1 px-4 hover:cursor-pointer text-lg font-semibold"
                >
                  Signup
                </button> */}
                <button
                  // onClick={() => navigate("/signin")}
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg py-1 px-4 hover:cursor-pointer text-lg font-semibold"
                >
                  Login
                </button>
                <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

              </>
            )}

            {/* {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-white text-black rounded-full py-1 px-4 hover:cursor-pointer text-lg font-semibold"
              >
                Logout
              </button>
            )} */}
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
