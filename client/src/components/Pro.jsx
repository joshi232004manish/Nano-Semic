

import React from 'react';
import health from '../assets/health.jpg';
import agri from '../assets/ag.jpg';
import safe from '../assets/safe.jpg';
import edu from '../assets/edu.jpg';
import ai from '../assets/ai.jpg';
import { useNavigate } from 'react-router-dom';

function Pro() {

  return (
    <>
      {/* Header Section */}
      <section className="bg-ogcolor">
        <div className="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 lg:px-8 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">Products</h2>
              <p className="mt-6 text-white text-md sm:text-2xl">
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, necessitatibus quia! Mollitia eligendi corporis
                nesciunt minima. Iusto eaque nesciunt consequuntur! */}
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src={ai} alt="AI" className="w-full max-w-[600px] h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-black text-4xl font-bold mb-6">Our Products</h1>

          {/* Product Cards */}
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {/* Card 1 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={health} alt="Healthcare Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Healthcare Products</div>
                <p className="text-gray-700 text-base">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore. */}
                </p>
              </div>
              <div className="px-6 py-3">
                <a href ="/Product"
                  // onClick={() => navigate("/product")}
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={edu} alt="Education Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Education Products</div>
                <p className="text-gray-700 text-base">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore. */}
                </p>
              </div>
              <div className="px-6 py-3">
                <a href ="/Product1"
                  
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={agri} alt="Agriculture Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Agriculture Products</div>
                <p className="text-gray-700 text-base">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore. */}
                </p>
              </div>
              <div className="px-6 py-3">
                <a href="/Product2"
                  
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={safe} alt="Safety Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Safety Products</div>
                <p className="text-gray-700 text-base">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore. */}
                </p>
              </div>
              <div className="px-6 py-3">
                <a href ="/Product3"
                  
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Seamless Products Section */}
      {/* <section className="bg-gray-100 py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center md:justify-start">
              <img src={selo} alt="Seamless Products" className="w-full max-w-[500px] h-auto rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Seamless Products</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna
                quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Key Features Section */}
      {/* <section className="max-w-[1280px] mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800 py-5">Highlighted Features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 1:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus cupiditate perferendis neque,
              possimus, nulla sed dicta molestias, harum aliquam nesciunt accusantium odio facere delectus.
            </p>
          </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 2:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad similique, sed nemo explicabo laudantium.
            </p>
          </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 3:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse eius provident, unde hic.
            </p>
          </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 4:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident quibusdam quo fuga.
            </p> */}
          {/* </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 5:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque sed fugiat vitae ex alias voluptatibus.
            </p>
          </div>
        </div> */}
      {/* </section> */}
    </>
  );
}

export default Pro;
