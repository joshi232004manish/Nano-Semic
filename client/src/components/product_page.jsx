import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//import { SwiperSlide, Swiper } from "swiper/react";
//import { Navigation } from "swiper/modules";
//import "swiper/css";
//import "swiper/css/navigation";
import axios from "axios";



const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [listing, setListing] = useState(null);
  
  const [queryEmail, setQueryEmail] = useState('');
  const [queryMessage, setQueryMessage] = useState('');
  const [queryStatus, setQueryStatus] = useState('');
  const [queryLoading, setQueryLoading] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/product/get/682c1c4b8a8dd6a09f1b1566"
        );
        setListing(response.data); // ✅ Axios response data
        console.log(response.data);
        // setSelectedImage(listing.imageUrls[0]);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };

    fetchListing();
  }, []);

  useEffect(() => {
    if (listing?.imageUrls?.length > 0) {
      setSelectedImage(listing.imageUrls[0]);
    }
  }, [listing]);

  const [magnifierStyle, setMagnifierStyle] = useState({
    display: "none",
    left: 0,
    top: 0,
    backgroundPosition: "0% 0%",
  });

  if (!listing || !selectedImage) {
    return <div>Loading...</div>;
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    const xInside = e.clientX - left;
    const yInside = e.clientY - top;

    const magnifierSize = 200; // Adjust this size as needed

    setMagnifierStyle({
      display: "block",
      // left: e.clientX - top,
      // top: e.clientY - left,
      left: `${xInside - magnifierSize / 2}px`,
      top: `${yInside - magnifierSize / 2}px`,

      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: "none" });
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setQueryStatus('');
    setQueryLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/query', {
        email: queryEmail,
        message: queryMessage,
      });

      setQueryStatus('Query submitted successfully!');
      setQueryEmail('');
      setQueryMessage('');
    } catch (error) {
      setQueryStatus('Failed to send query. Try again.');
    } finally {
      setQueryLoading(false);
    }
  };


  return (
    <div className="flex flex-col md:flex-row gap-10 p-6">
      <div className="w-[100%]">
        <div className="flex p-4 gap-4">
          <div className="flex flex-col space-y-2 w-20">
            {listing.imageUrls.map((image, index) => (
              <div
                key={index}
                className={`border ${selectedImage === image ? "border-blue-500" : "border-gray-300"
                  } p-1 cursor-pointer`}
                onMouseEnter={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
            <div className="border p-1 cursor-pointer text-center"><span className="text-s">+more</span></div>
          </div>

          <div className="flex-1 p-4 relative">
            <div
              className="w-full h-[400px]  bg-gray-100 flex items-center justify-center  relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-full max-w-full object-cover"
              />
              <div
                className="w-[200px]  h-[200px]  border-2 border-blue-500 absolute pointer-events-none"
                style={{
                  ...magnifierStyle,
                  backgroundSize: "400%",
                  backgroundRepeat: "no-repeat",

                }}
              ></div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-orange-500">
                Two Way Charging
              </h2>
              <p className="text-gray-500">
                Charge both the powerbank and your devices simultaneously
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        {/* Product Details */}

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">
            {/* Arsenic Removal Device (Arsensafe) */}
            {listing.title}
          </h2>
          <p className="text-red-500 font-semibold">Save ₹{((listing.discount * listing.price) / 100).toFixed(2)}</p>

          <div className="text-xl font-bold text-red-600">
            ₹{(listing.price - (listing.discount * listing.price) / 100).toFixed(2)}
            <span className="line-through text-gray-400"> ₹{listing.price}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button className="bg-gray-300 px-3 py-1 rounded">-</button>
            <input
              type="number"
              defaultValue="1"
              className="w-12 text-center border rounded"
            />
            <button className="bg-gray-300 px-3 py-1 rounded">+</button>
          </div>

          <div className="flex space-x-4 mt-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Add to cart
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Buy it now
            </button>
          </div>
        </div>

        {/* Description and Frequently Bought Together */}
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold">Description</h3>
            <p className="text-gray-600">
              {listing.description}
            </p>

            <h4 className="text-lg font-bold">What's Included :</h4>
            <ul className="list-disc ml-6 space-y-1 text-gray-600">
              {listing.includes.map((key, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-gray-500">•</span>
                  <span className="ml-2">{key}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Product Query Form */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Have a question about this product?</h3>
            <form className="space-y-4 max-w-xl" onSubmit={handleQuerySubmit}>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={queryEmail}
                  onChange={(e) => setQueryEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-gray-700">
                  Your Question
                </label>
                <textarea
                  id="message"
                  value={queryMessage}
                  onChange={(e) => setQueryMessage(e.target.value)}
                  rows="4"
                  placeholder="Ask your question about this product..."
                  required
                  className="w-full mt-1 px-4 py-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={queryLoading}
                className={`bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition ${queryLoading ? 'opacity-50' : ''}`}
              >
                {queryLoading ? 'Sending...' : 'Submit Query'}
              </button>

              {queryStatus && (
                <div className={`mt-4 ${queryStatus.includes('success') ? 'text-green-600' : 'text-red-500'}`}>
                  {queryStatus}
                </div>
              )}
            </form>
          </div>

        

      </div>
    </div>
  );
};

export default ProductPage;
