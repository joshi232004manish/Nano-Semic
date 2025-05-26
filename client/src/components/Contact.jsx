import React, { useState } from 'react';
import contact from '../assets/iit.jpg';
import { FaLinkedinIn } from "react-icons/fa";
 import { db } from '../Firebase'; // adjust path as needed
import { collection, addDoc } from 'firebase/firestore';
import axios from 'axios';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
     // Send feedback to your backend API
    const response = await axios.post("http://localhost:5000/api/auth/contact", {
      name: formData.name,
      email: formData.email,
      rating: formData.rating,
      message: formData.message,
    });
    await addDoc(collection(db, 'feedbacks'), formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      rating: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 4000);
  } catch (error) {
    console.error('Error saving feedback: ', error);
  }
};


  return (
    <>
      <div className="bg-ogcolor min-h-96">
        <div className="max-w-[1280px] mx-auto py-5 flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8">
          <div className="basis-full sm:basis-1/2 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-sans py-10">Get In Touch</h1>
            <div className="text-white text-lg sm:text-xl mt-10 sm:mt-28">
              <p>
                REACH OUT, SHARE A QUESTION OR PROVIDE
                <br /> FEEDBACK ON OUR PRODUCTS.
                <br />
                FILL OUT THE FORM AND WE’LL
                <br /> RESPOND AS SOON AS POSSIBLE.
              </p>
            </div>
          </div>
          <div className="basis-full sm:basis-1/2 mt-6 sm:mt-0 flex justify-center">
            <img src={contact} alt="Contact" className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-auto max-h-[400px]" />
          </div>
        </div>

        {/* Feedback Form Section */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">We’d love your feedback!</h2>
            {submitted && (
              <div className="mb-4 p-3 text-green-700 bg-green-100 rounded text-center">
                Thank you for your feedback!
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <select
                  name="rating"
                  required
                  value={formData.rating}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="" disabled>Select Rating</option>
                  <option value="Excellent">⭐ Excellent</option>
                  <option value="Good">👍 Good</option>
                  <option value="Average">👌 Average</option>
                  <option value="Poor">👎 Poor</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map and Contact Sections remain unchanged below */}
        {/* ... Keep your map and contact info sections here ... */}
         {/* Map Section */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="mt-10 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.6277278554217!2d85.67171847500651!3d20.149572781288732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19adf474fd646f%3A0x6362bd4580ab753f!2sNano%20Semic!5e0!3m2!1sen!2sin!4v1719481516053!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                  className="w-full h-[300px] sm:h-[400px] md:h-[480px]"
                ></iframe>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden p-6">
                  <h3 className="text-2xl font-bold text-gray-900">Address</h3>
                  <p className="mt-2 text-gray-600">
                    Nano Semic Pvt Ltd,
                    <br />
                    Research & Entrepreneurship Park, C/O
                    <br />
                    IIT Bhubaneswar, Kansapada
                    <br />
                    Odisha: 752050
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden mt-6 p-6">
                  <h3 className="text-xl font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Friday: 9am - 6pm</p>
                  <p className="mt-1 text-gray-600">Saturday: 9am - 4pm</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <div className="bg-gray-100 h-auto sm:h-60 rounded-xl shadow-xl py-8 sm:py-0">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left text-black">
            <h1 className="text-lg sm:text-xl font-serif">
              How you can contact us
            </h1>
            <ol className="text-black font-serif text-sm mt-5 list-disc list-inside sm:px-2">
              <li>Via Email: nanosemic.official@gmail.com</li>
              <li>Via Phone: +911002002999</li>
              <li className="flex items-center justify-center sm:justify-start">
                Via LinkedIn:
                <FaLinkedinIn size={20} className="ml-2 text-blue-600 hover:text-blue-700" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  
      
    </>
  );
};

export default Contact;
