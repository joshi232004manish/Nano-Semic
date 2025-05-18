import React from 'react'

const test = () => {
  return (
    <>
      
   

<div className="bg-ogcolor">
        <div className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4 text-white">
        <div className='flex text 2xl item-center gap-2'>

             <img src='' alt="" className="w-12" ></img>
             <span className='text-white py-2  text-xl font-semibold'>nanosemic</span>
             </div>
            

          <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <h1 className="w-full text-3xl font-bold text-[black] m-4">
              REACT.
            </h1>
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default test;
