import React from "react";
import health from "../assets/health.jpg";
import agri from "../assets/ag.jpg";
import safe from "../assets/safe.jpg";
import edu from "../assets/edu.jpg";
import ai from "../assets/ai.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Pro = () => {

  const categories = [
  'Raw Materials and Components',
  'Sensors and Electronics',
  
];



const [products,setProducts] = useState([]);

useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/product/get"
        );
        setProducts(response.data); // ✅ Axios response data
        console.log(response.data);
        // setSelectedImage(listing.imageUrls[0]);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  },  []);


  return (
    <>
      {/* Header Section */}
      <section className="bg-ogcolor">
        <div className="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 lg:px-8 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                Our Products
              </h2>
              <p className="pb-6 pr-6 pt-6 text-lg text-gray-100 leading-relaxed max-w-3xl">
                We offer premium raw materials and cutting-edge sensors trusted
                across industries. Whether you're building from scratch or
                sourcing ready-to-use components, we’ve got you covered. Our
                materials are lab-tested, and our sensors are
                performance-verified for real-world applications. Fueling
                innovation at every stage — from material to market-ready
                solution.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={ai}
                alt="AI"
                className="w-full max-w-[600px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100">
        {/* <header className="bg-gray-900 text-white text-center py-5 text-2xl font-semibold">
          Electronics Store
        </header> */}

        {/* Categories */}
        <section className="py-10 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#295797] to-[#012557] text-white h-40 flex items-center justify-center rounded-xl text-center font-bold text-sm p-4 shadow hover:scale-105 transition"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white py-10 px-4">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Featured Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={product.imageUrls[0]} // Assuming imageUrls is an array of image URLs
                  alt={product.title}
                  className="w-full h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-sm text-gray-500">Rs.{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Pro;
