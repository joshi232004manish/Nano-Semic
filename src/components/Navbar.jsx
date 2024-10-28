
// import logo from '../assets/logo.png'
// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { useNavigate, NavLink } from "react-router-dom";

// function Navbar ()  {

//   const navigate = useNavigate();
  


//   return (
//     <>
//     <nav className="bg-ogcolor  py-5">
//         <div className="max-w-[1280px] mx-auto flex items-center justify-between md:px-2 sm:px-2">
//             <div className='flex text 2xl item-center gap-2'>

//             <img src={logo} alt="" className="w-12" ></img>
//             <span className='text-white py-2  text-xl font-semibold'>nanosemic</span>
//             </div>

//         <ul className="text-white text-bold text-lg item-center font-bold hidden md:flex pl-9 md:pl-0 gap-10 hover:cursor-pointer justify-between">
//           <li className ='hover:cursor-pointer'>
//             <NavLink to = "/home">Home</NavLink>
//             </li>
//             <li>

//             <NavLink to = "/about">About </NavLink>
//             </li>
//             <li>

//             <NavLink to = "/pro">Product</NavLink>
//             </li>
//             <li>
//             <NavLink to = "/services">Services</NavLink>
//             </li>
//             <li>
//             <NavLink to ="/Contact">Contact</NavLink>
//             </li>
//               <button onClick={()=>navigate("/login")} className="bg-white inline- text-black rounded-full py-1 px-4 hover:cursor-pointer text-lg font-semibold"> Login</button>
//              </ul>
            
//         </div>
//     </nav>

//     </>
//   )
// }

// export default Navbar



import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="bg-ogcolor py-5">
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
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
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
          className={`fixed top-0 left-0 h-full w-[250px] bg-ogcolor text-white z-50 transform ${
            nav ? "translate-x-0" : "-translate-x-full"
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
            <li onClick={handleNav}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <button
              onClick={() => {
                navigate("/signup");
                handleNav();
              }}
              className="bg-white text-black rounded-full py-2 px-4 mt-4 text-lg font-semibold"
            >
              Signup
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
